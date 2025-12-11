// 1) Write a Node.js program that uses fs.readFile() to read a le named data.txt asynchronously and print its content on the console.

const fs = require("fs");

try {
  fs.readFile("./demo.txt", "utf-8", (error, data) => {
    if (error) {
      console.log("Error In Readfile Fun = ", error);
    }
    console.log("Data = ", data);
  });
} catch (error) {
  console.log("Error While Reading File:", error);
}
