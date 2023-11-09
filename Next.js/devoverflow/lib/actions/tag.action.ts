"use server"

import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";

export async function getAllTags() {
    try {
        connectToDatabase();

        const tags = Tag.find().sort({ createdOn: -1 })

        return tags;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getTagById(id: string) {

    try {

        connectToDatabase();

        const tag = await Tag.findById(id)
            .populate({
                path: "questions",
                options: {
                    sort: { createdAt: -1 }
                },
                populate: [
                    { path: "tags", select: "_id name" },
                    { path: "author" }
                ]
            })

        return { tagName: tag.name, questions: tag.questions };

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function getTopTags() {

    try {

        connectToDatabase();

        const tags = await Tag.aggregate([
            { $project: { name: 1, numberOfQuestions: { $size: "$questions" } } },
            { $sort: { numberOfQuestions: -1 } },
            { $limit: 5 }
        ])

        return tags;

    } catch (error) {
        console.log(error);
        throw error;
    }

}