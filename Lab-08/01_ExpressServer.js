// 1. Create a hello world webapp using ExpressJS. (A)

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(201).header({"Content-Type": "text/html"})
  res.send("<h1>Hello</h1>");
});

app.listen(8080, () => {
  console.log("Server running h at port 8080");
});
