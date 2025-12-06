//  3) Write a program to x the path="//folder//subfolder//// le.txt" using path.normalize() and display the clean normalised path. (A)

const path = require("path");

// const normalPath = "//folder//subfolder///file.txt//";
 const normalPath = "///folder//subfolder///file.txt//";

const normalisedPath = path.normalize(normalPath);

console.log("Normalized Path = ", normalisedPath);
