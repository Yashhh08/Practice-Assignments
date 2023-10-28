"use server"

import User, { IUser } from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export interface CreateUserParams {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    picture: string;
}

export async function createUser(userData: CreateUserParams) {
    try {
        connectToDatabase();

        const user = await User.create(userData);

        return user;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getUserById(userId: string) {
    try {
        connectToDatabase();

        const user = await User.findOne({ clerkId: userId });

        if (!user) {
            throw new Error("User not found");
        }

    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
}

export async function updateUser(params: UpdateUserParams) {

    try {
        connectToDatabase();

        await User.findOneAndUpdate({ "clerkId": params.clerkId }, params.updateData);

        revalidatePath(params.path);
    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function deleteUser(userId: string) {
    try {

        connectToDatabase();

        const user = await User.findOneAndDelete({ "clerkId": userId })

        if (!user) {
            throw new Error("No user found");
        }

        // Delete user from database
        // and questions, answers, comments, etc.

        await Question.deleteMany({ "author": user._id })

        return user;

    } catch (error) {
        console.log(error);
        throw error;
    }
}