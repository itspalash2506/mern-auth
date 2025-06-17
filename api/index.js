import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to the MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(5173, () => {
  console.log("Server is running on the port 5173 changed ");
});
