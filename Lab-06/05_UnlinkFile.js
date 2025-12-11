// 5) Write a program to delete a le named temp.txt using fs.unlink() and display success or error. (B)

import fs from "fs";

export const deleteFile = (filePath) => {
  try {
    fs.unlinkSync(filePath);
    console.log("File Deleted !!");
  } catch (error) {
    console.log("Error While Unlink File :", error);
  }
};

deleteFile("./write.txt");
