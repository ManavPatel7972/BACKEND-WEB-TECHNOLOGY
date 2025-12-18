// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello About page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello contact page</h1>");
});
app.get("/service", (req, res) => {
  res.send("<h1>Hello Service page</h1>");
});
app.get("/profile/:id", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hello profile page with id = ${id} page</h1>`);
});

app.listen(8080, () => {
  console.log("Server running h at port 8080");
});
