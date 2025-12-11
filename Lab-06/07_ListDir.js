// 7) Write a program to list all les in a folder called documents/ using fs.readdir() and print the le names one by one. (B

import fs from "fs";

const listDir = (dirPath) => {
  try {
    const data = fs.readdirSync(dirPath, "utf-8");
    console.log("Data return Successfully.");
    return data;
  } catch (error) {
    console.log("Error While list Directory:", error);
  }
};

const data = listDir(".");

data.forEach((data, index) => {
  console.log(`${index + 1} : ${data}`);
});
