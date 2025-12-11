// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the asynchronous version. (A)

const fs = require("fs");

try {
  const data = fs.readFileSync("./demo.txt", "utf-8");
  console.log("Data = ", data);
} catch (error) {
  console.log("Error while Reading File : ", error);
}
