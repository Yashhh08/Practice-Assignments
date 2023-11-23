"use server"

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Interaction from "@/database/interaction.model";
import { revalidatePath } from "next/cache";

export interface ViewQuestionParams {
    questionId: string;
    userId: string | undefined;
}

export async function viewQuestion(params: ViewQuestionParams) {

    try {

        connectToDatabase();

        const question = await Question.findById(params.questionId);

        question.views = question.views + 1;

        await question.save();

        if (params.userId) {
            const existingInteraction = await Interaction.findOne({
                user: params.userId,
                action: "view",
                question: params.questionId,
            })

            if (existingInteraction) return

            await Interaction.create({
                user: params.userId,
                action: "view",
                question: params.questionId,
            })
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

}