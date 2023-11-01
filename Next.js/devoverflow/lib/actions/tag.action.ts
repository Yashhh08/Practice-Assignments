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