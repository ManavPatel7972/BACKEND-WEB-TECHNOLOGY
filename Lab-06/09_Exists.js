// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already exists, show an appropriate message.

//! const fs = require("fs"); not Using This in ES-6 module
import fs from "fs";

export const isExist = (filePath) => {
  try {
    const res = fs.existsSync(filePath);
    return res;
  } catch (error) {
    console.log("Error while Check Existence of File ", error);
  }
};

if (isExist("./03_WriteFile.js")) {
  console.log("File Exist.");
} else {
  console.log("File Not Exist !!");
}
