"use server"

import { connectToDatabase } from "../mongoose";

export async function demo() {
    try {
        await connectToDatabase();
    }
    catch (error) {
        console.log("error demo ", error);
        throw error;
    }
}