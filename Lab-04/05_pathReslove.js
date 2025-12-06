//  5) Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js" into an absolute path. Print the nal 
// resolved path. (A)

const path = require("path");

// 1. Always returns an absolute path

// If you give a relative path, Node converts it to an absolute path (based on current working directory).

// 2. Processes arguments right → left

// It looks at the last argument first.
// If any argument is absolute (/something or C:\something), resolution stops there.

// 3. Normalizes (. and ..)

// .. moves up one directory.
// . means current directory.

console.log(path.resolve("folder", "file.txt"));
// /Users/manav/project/folder/file.txt


console.log(path.resolve("/home/user", "project", "src", "index.js"));
// /home/user/project/src/index.js

console.log(path.resolve("a", "b", "/c", "d"));
// /c/d









