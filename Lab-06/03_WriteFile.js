// 3) Create a program that writes the text into a file named output.txt. (A)

const fs = require("fs");
const { json } = require("stream/consumers");

const data = {
  name: "manav",
  age: 18,
  roll: 333,
};

const jsonData = JSON.stringify(data);

const filePath = "./write.txt";

const writeAFile = () => {
  try {
    fs.writeFileSync(filePath, jsonData, "utf-8");

    console.log("File Write Done");
  } catch (error) {
    console.log("Error While Writing FIle:", error);
  }
};

export const deleteFile = () => {
  try {
    fs.unlinkSync(filePath);
    console.log("File Deleted !!");
  } catch (error) {
    console.log("Error While Unlink File :", error);
  }
};

// deleteFile();
writeAFile();
