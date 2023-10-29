import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {

    if (!process.env.MONGODB_URL) {
        return console.log("Missing mongodb URL");
    }

    if (isConnected) {
        return console.log("Already connected..!!");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, { dbName: "DevOverflow" })

        isConnected = true;

        console.log("Connected to database..!!");

    } catch (error) {
        console.log("mongodb connection failed..!!", error);
    }

}