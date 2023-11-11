"use server"

import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import { FilterQuery } from "mongoose";
import Question from "@/database/question.model";

export async function getAllTags(searchQuery: string, filter: string) {
    try {
        connectToDatabase();

        const query: FilterQuery<typeof Tag> = {}

        if (searchQuery) {
            query.$or = [
                { name: { $regex: new RegExp(searchQuery, "i") } }
            ]
        }

        let sortOptions = {};

        switch (filter) {
            case "popular":
                sortOptions = { questions: -1 }
                break;
            case "recent":
                sortOptions = { createdOn: -1 }
                break;
            case "name":
                sortOptions = { name: 1 }
                break;
            case "old":
                sortOptions = { createdOn: 1 }
                break;
        }

        const tags = Tag.find(query).sort(sortOptions);

        return tags;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getTagById(id: string, searchQuery: string) {

    try {

        connectToDatabase();

        const query: FilterQuery<typeof Question> = {};

        if (searchQuery) {
            query.$or = [
                { title: { $regex: new RegExp(searchQuery, "i") } },
                { content: { $regex: new RegExp(searchQuery, "i") } }
            ]
        }

        const tag = await Tag.findById(id)
            .populate({
                path: "questions",
                match: query,
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