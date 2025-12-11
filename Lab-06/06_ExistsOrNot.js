// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already exists, show an appropriate message.

import fs from "fs";

export const makeDir = (dirPath) => {
  try {
    const res = fs.mkdirSync(dirPath);

    console.log(`Directory Created : ${dirPath}`);
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("error = ", error);

      console.log("Dir Already Exist!");
      return;
    }
    console.log("Error while Make Dir :", error);
  }
};

export const deleteDirectory = (dirPath) => {
  fs.rm(dirPath, { recursive: true, force: true }, (err) => {
    if (err) {
      console.log("Error While Delete Directory!", err);
      return;
    }
    console.log("Directory Deleted.");
  });
};

// makeDir("../Lab-7");
deleteDirectory("../Lab-7");
