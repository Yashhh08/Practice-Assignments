"use server"

import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import { FilterQuery } from "mongoose";
import Question from "@/database/question.model";

export async function getAllTags(searchQuery: string, filter: string, page = 1, pageSize = 9) {
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

        const skipAmount = (page - 1) * pageSize;

        const tags = await Tag.find(query).skip(skipAmount).limit(pageSize).sort(sortOptions);

        const totalTags = await Tag.countDocuments(query);

        const isNext = skipAmount + pageSize < totalTags;

        return { tags, isNext };
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getTagById(id: string, searchQuery: string, page = 1, pageSize = 20) {

    try {

        connectToDatabase();

        const query: FilterQuery<typeof Question> = {};

        if (searchQuery) {
            query.$or = [
                { title: { $regex: new RegExp(searchQuery, "i") } },
                { content: { $regex: new RegExp(searchQuery, "i") } }
            ]
        }

        const skipAmount = (page - 1) * pageSize;

        const tag = await Tag.findById(id)
            .populate({
                path: "questions",
                match: query,
                options: {
                    sort: { createdAt: -1 },
                    skip: skipAmount,
                    limit: pageSize + 1
                },
                populate: [
                    { path: "tags", select: "_id name" },
                    { path: "author" }
                ]
            })

        const isNext = tag.questions.length > pageSize;

        return { tagName: tag.name, questions: tag.questions, isNext };

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