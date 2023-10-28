"use server"

import { Schema } from "mongoose";
import { connectToDatabase } from "../mongoose";
import User, { IUser } from "@/database/user.model";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { redirect } from "next/navigation";

export interface CreateQuestionParams {
    title: string;
    content: string;
    tags: string[];
    author: Schema.Types.ObjectId | IUser;
}

export async function createQuestion(que: CreateQuestionParams) {
    try {
        connectToDatabase();

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

        redirect("/");

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getQuestions() {
    try {
        connectToDatabase();

        const questions = await Question.find()
            .populate({ path: "tags", model: "Tag" })
            .populate({ path: "author", model: "User", })
            .sort({ createdAt: -1 })

        return questions;

    } catch (error) {
        console.log(error);
        throw error;
    }
}