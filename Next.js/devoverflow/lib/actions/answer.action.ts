"use server"

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import Question, { IQuestion } from "@/database/question.model";
import { revalidatePath } from "next/cache";
import User, { IUser } from "@/database/user.model";
import { Schema } from "mongoose";
import Interaction from "@/database/interaction.model";

export interface CreateAnswerParams {
    content: string;
    authorId: Schema.Types.ObjectId | IUser;
    questionId: Schema.Types.ObjectId | IQuestion;
    path: string;
}

export async function createAnswer(params: CreateAnswerParams) {

    try {
        connectToDatabase();

        await User.find();

        const answer = await Answer.create({
            content: params.content,
            author: params.authorId,
            question: params.questionId,
        })

        const question = await Question.findById(params.questionId);

        question.answers.push(answer._id);

        await question.save();

        revalidatePath(params.path);

        return answer;

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export interface GetAnswersParams {
    questionId: string;
    filter: string
    page?: number;
    pageSize?: number;
}

export async function getAnswers({ questionId, filter, page = 1, pageSize = 10 }: GetAnswersParams) {

    try {
        connectToDatabase();

        let sortOptions = {};

        switch (filter) {
            case "highestUpvotes":
                sortOptions = { upvotes: -1 }
                break;
            case "lowestUpvotes":
                sortOptions = { upvotes: -1 }
                break;
            case "recent":
                sortOptions = { createdAt: -1 }
                break;
            case "old":
                sortOptions = { createdAt: 1 }
                break;
        }

        const skipAmount = (page - 1) * pageSize;

        const answers = await Answer.find({ question: questionId })
            .populate({ path: "author" })
            .skip(skipAmount)
            .limit(pageSize)
            .sort(sortOptions);

        const totalAnswers = await Answer.countDocuments({ question: questionId });

        const isNext = skipAmount + pageSize < totalAnswers;

        return { answers, isNext };

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export interface AnswerVoteParams {
    answerId: string;
    userId: string;
    path: string;
}

export async function upvoteAnswer(params: AnswerVoteParams) {

    try {

        connectToDatabase();

        const answer = await Answer.findById(params.answerId);

        if (!answer) {
            throw new Error("No answer found");
        }

        const hasUpvoted = answer.upvotes.includes(params.userId);

        if (hasUpvoted) {
            answer.upvotes.pull(params.userId);
        }
        else {
            answer.upvotes.push(params.userId);
            answer.downvotes.pull(params.userId);
        }

        answer.save();

        revalidatePath(params.path);

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function downvoteAnswer(params: AnswerVoteParams) {

    try {

        connectToDatabase();

        const answer = await Answer.findById(params.answerId);

        if (!answer) {
            throw new Error("No answer found");
        }

        const hasDownvoted = answer.downvotes.includes(params.userId);

        if (hasDownvoted) {
            answer.downvotes.pull(params.userId);
        }
        else {
            answer.downvotes.push(params.userId);
            answer.upvotes.pull(params.userId);
        }

        answer.save();

        revalidatePath(params.path);

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function getAnswersByUserId(userId: String) {

    try {
        connectToDatabase();

        const user = await User.findOne({ "clerkId": userId })

        if (!user) {
            throw new Error("No user found");
        }

        const answers = await Answer.find({ "author": user._id })
            .populate("author")
            .sort({ "upvotes": -1 });

        return answers;

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export interface DeleteAnswerParams {
    answerId: string;
    path: string;
}

export async function deleteAnswer(params: DeleteAnswerParams) {

    try {

        connectToDatabase();

        const answer = await Answer.findById(params.answerId);

        if (!answer) {
            throw new Error("Answer not found");
        }

        await answer.deleteOne({ "_id": params.answerId });

        await Question.updateMany({ "_id": answer.question }, { $pull: { "answers": params.answerId } });

        await Interaction.deleteMany({ "answer": params.answerId });

        revalidatePath(params.path);

    } catch (error) {
        console.log(error);
        throw error;
    }

}
