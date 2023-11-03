"use server"

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import Question, { IQuestion } from "@/database/question.model";
import { revalidatePath } from "next/cache";
import User, { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

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
    sortBy?: string;
    page?: number;
    pageSize?: number;
}

export async function getAnswers(params: GetAnswersParams) {

    try {
        connectToDatabase();

        const answers = await Answer.find({ question: params.questionId })
            .populate({ path: "author" })
            .sort({ createdAt: -1 });

        return answers;

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
