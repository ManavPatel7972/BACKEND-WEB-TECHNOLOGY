//* 1) Write a Node.js program using child_process.exec() to run the shell command to check the current version of node. (A)

const child = require("child_process");

const exec = child.exec("node --version", (error, stdout, stderr) => {
  if (error) {
    console.log("Error Inside Your file Function = ", error);
    return;
  }

  if (stderr) {
    console.log("Error Inside Your Executable Command", stderr);
    return;
  }

  console.log("Output = ", stdout);
});
