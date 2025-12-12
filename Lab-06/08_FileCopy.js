// 8) Write a program that copies a le named source.txt to a new le named backup.txt using fs.copyFile(). (C)

import fs from "fs";

const copyFile = (sourcePath, destinationPath) => {
  try {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log("File Copied..");
  } catch (error) {
    console.log("Error while Copy File :", error);
  }
};

// copyFile("./demo.txt","./new.txt");
