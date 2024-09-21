import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "../backend/route/product.route.js";

import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running at http://localhost:5000");
});

// VjqDMadpMGmtqiKl
