// 1) Write a Node.js program that prints the directory name, file name, file extension, and full path of the code file. (A)
const path = require("path");

const dirName = __dirname;
console.log("Dirname = ",dirName);

const fileName = __filename;
console.log("Filename =",fileName);

const extName = path.extname(__filename);
console.log("extension =",extName);

const fullPath = path.resolve("./01_Dirname.js");
console.log("FUll Path =",fullPath);

// Return File Name
const baseName = path.basename(__filename);
console.log("basename =",baseName);







