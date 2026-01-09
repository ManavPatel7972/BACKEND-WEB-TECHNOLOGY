import express from "express";

import userRoutes from "./routes/user.routes.js";
import bookRoutes from "./routes/book.routes.js";
import authorRoutes from "./routes/author.routes.js";
import issueRoutes from "./routes/issue.routes.js";

export const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/issues", issueRoutes);

app.get("/", (req, res) => {
  res.send("Hello manu......")
});

export default app;
