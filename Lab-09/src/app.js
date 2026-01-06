import express from "express";
import dotenv from "dotenv";
dotenv.config();

export const app = express();

app.use(express.json());

import { userRoutes } from "./routes/user.routes.js";
import { facultyRoutes } from "./routes/faculty.routes.js";
import { productRoutes } from "./routes/product.routes.js";

app.use("/user", userRoutes);
app.use("/faculty", facultyRoutes);
app.use("/product", productRoutes);
