// 2) Write a program that uses child_process.spawn() to run the command to print les and folders of current directory. (B)

const cp = require("child_process");

const spawn = cp.spawn("cmd.exe", ["/c", "dir", "/s"]);

spawn.stderr.on("data", (err) => {
  console.log("STDERR = ", err.toString());
});

spawn.stdout.on("data", (chunk) => {
  console.log("Data = ", chunk);
});

spawn.on("close", (code) => {
  console.log("Data Transfer Process Completed with Exit Code = ", code);
});
