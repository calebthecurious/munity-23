import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strict", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB!");
  } catch (error) {
    handleError(error);
  }
};

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
