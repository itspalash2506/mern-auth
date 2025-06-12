import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const app = express();
app.use(express.json()); //This line allows the server to parse JSON bodies in requests
app.listen(3000, () => {
  console.log("Server listening on port 3000! ");
});

app.get("/", (req, res) => {
  res.json({
    message: "API is working!",
  });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
