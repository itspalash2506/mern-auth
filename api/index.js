import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.router.js";

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
app.listen(3000, () => {
  console.log("Server is running on the port 3000 changed ");
});

app.use(express.json()); 

app.use('/api/user', userRoutes); // The function is exported at default with the name "router" but because its exported in default, it can be imported with the name "userRotues"
app.use("/api/auth", authRoutes);