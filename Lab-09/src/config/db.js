import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    console.log("URL----------", process.env.MONGO_URI);

    const db = await mongoose.connect(`${process.env.MONGO_URI}/demo`);
    if (db) {
      console.log("DB connected");
    }
  } catch (error) {
    console.log("ERR when DB connection", error);
  }
};
