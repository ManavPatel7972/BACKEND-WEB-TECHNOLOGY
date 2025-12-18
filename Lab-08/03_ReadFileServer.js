// . Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using express

// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)

import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello home page</h1>");
});

app.get("/file", (req, res) => {
  fs.readFile("./home.txt", (err, data) => {
    
    if (err) {
      res.status(400).json({
        error: err,
        message: err.message,
        success: false,
      });
    }

    const readData = data.toString();
    if (!readData) {
      res.status(200).json({
        message: "No data Found",
        data: "",
        success: true,
      });
    }

    res.send(`<h1>{file data :${readData} }</h1>`);
  });
});


app.listen(8080, () => {
  console.log("Server running h at port 8080");
});
