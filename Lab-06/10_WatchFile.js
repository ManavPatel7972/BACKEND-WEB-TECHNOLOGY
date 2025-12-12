// 10) Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content changes, print: “File Changed”

import fs, { watch } from "fs";

const watchFile = (filePath) => {
  fs.watchFile(filePath, (curr, prev) => {
    console.log("File Changed!!");

    console.log("Curr = ", curr);

    console.log("Prev = ", prev);
  });
};

watchFile("./demo.txt");

