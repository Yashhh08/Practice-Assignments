"use server"

import { Schema } from "mongoose";
import { connectToDatabase } from "../mongoose";
import User, { IUser } from "@/database/user.model";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { revalidatePath } from "next/cache";
import Answer from "@/database/answer.model";
import Interaction from "@/database/interaction.model";

export interface CreateQuestionParams {
    title: string;
    content: string;
    tags: string[];
    author: Schema.Types.ObjectId | IUser;
}

export async function createQuestion(que: CreateQuestionParams) {
    try {
        await connectToDatabase();

        const question = await Question.create({
            title: que.title,
            content: que.content,
            author: que.author
        });

        const allTags = [];

        for (const tag of que.tags) {
            const existingTag = await Tag.findOne({ name: tag });

            if (!existingTag) {
                const newTag = await Tag.create({ name: tag, questions: [question._id] });
                allTags.push(newTag._id);
            }
            else {
                existingTag.questions.push(question._id);
                await existingTag.save();
                allTags.push(existingTag._id);
            }
        }

        await Question.findByIdAndUpdate(question._id, { tags: allTags });

        revalidatePath("/");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getQuestions() {
    try {
        await connectToDatabase();

        await User.find();

        const questions = await Question.find()
            .populate({ path: "tags", model: "Tag" })
            .populate({ path: "author", model: "User" })
            .sort({ createdAt: -1 })

        return questions;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getQuestionById(id: string) {
    try {
        connectToDatabase();

        const question = await Question.findById(id)
            .populate({ path: "tags", })
            .populate({ path: "author" });

        return question;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export interface QuestionVoteParams {
    questionId: string;
    userId: string;
    path: string;
}

export async function upvoteQuestion(params: QuestionVoteParams) {

    try {
        connectToDatabase();

        const question = await Question.findById(params.questionId);

        if (!question) {
            throw new Error("No user found");
        }

        const hasUpVoted = question.upvotes.includes(params.userId);

        if (hasUpVoted) {
            question.upvotes.pull(params.userId);
        }
        else {
            question.upvotes.push(params.userId);
            question.downvotes.pull(params.userId);
        }

        question.save();

        revalidatePath(params.path);

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function downvoteQuestion(params: QuestionVoteParams) {

    try {
        connectToDatabase();

        const question = await Question.findById(params.questionId);

        if (!question) {
            throw new Error("No user found");
        }

        const hasDownvoted = question.downvotes.includes(params.userId);


        if (hasDownvoted) {
            question.downvotes.pull(params.userId);
        }
        else {
            question.downvotes.push(params.userId);
            question.upvotes.pull(params.userId);
        }

        question.save();

        revalidatePath(params.path);

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function getQuestionsByUserId(userId: String) {

    try {
        connectToDatabase();

        const user = await User.findOne({ "clerkId": userId })

        if (!user) {
            throw new Error("No user found");
        }

        const questions = await Question.find({ "author": user._id })
            .populate("author")
            .populate("tags")
            .sort({ "views": -1, "upvotes": -1 });

        return questions;

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export interface DeleteQuestionParams {
    questionId: string,
    path: string
}

export async function deleteQuestion(params: DeleteQuestionParams) {
    try {

        connectToDatabase();

        await Question.findByIdAndRemove(params.questionId);

        await Tag.updateMany({ "questions": params.questionId }, { $pull: { "questions": params.questionId } });

        await Answer.deleteMany({ "question": params.questionId });

        await Interaction.deleteMany({ "question": params.questionId });

        revalidatePath(params.path);

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export interface UpdateQuestionParams {
    questionId: string
    title: string
    content: string
}

export async function updateQuestion(params: UpdateQuestionParams) {

    try {
        connectToDatabase();

        await Question.findByIdAndUpdate(params.questionId, { "title": params.title, "content": params.content });

        revalidatePath("/");

    } catch (error) {
        console.log(error);
        throw error;
    }

}