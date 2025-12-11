// 4) Create a program that appends the text into a le named output.txt. (A)

const fs = require("fs");
import { deleteFile } from "./03_WriteFile";

const filePath = "./append.txt";

const appendData = () => {
  try {
    fs.appendFileSync(filePath, "\n Updated Data: appended\n", "utf-8");
    console.log("Appended data Done ..");
  } catch (error) {
    console.log("Error While Append data on File :", error);
  }
};

// deleteFile();
appendData();
