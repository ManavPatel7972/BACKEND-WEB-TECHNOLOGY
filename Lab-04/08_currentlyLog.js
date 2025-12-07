//  8) Write a Node.js program that prints details about the currently logged-in user in operating system. (B)

const os = require("os");

console.log("User Logs = ",os.userInfo());

console.log("Up time Of system = ",os.uptime()/3600);
