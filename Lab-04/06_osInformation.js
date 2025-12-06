//  6) Write a program that prints: (A)
//  • Operating system name
//  • Release version
//  • Platform
//  • Architecture

const { log } = require("console");
const os = require("os");

console.log("Operating system name = ", os.type());
console.log("Release version = ", os.version());
console.log("Platform = ", os.platform());
console.log("Architecture = ", os.arch());
console.log("machine = ", os.machine());
console.log("LoadAvg = ", os.loadavg());
console.log("HomeDir = ", os.homedir());

const freeMemBytes = os.freemem();
const totalMemory = os.totalmem();

const kb = freeMemBytes / 1024;
const mb = freeMemBytes / (1024 * 1024);
const gb = freeMemBytes / (1024 * 1024 * 1024);

// same as above code logic
// const kb = freeMemBytes / 1024;
// const mb = kb / 1024;
// const gb = mb / 1024;

const kb2 = totalMemory / 1024;
const mb2 = totalMemory / (1024 * 1024);
const gb2 = totalMemory / (1024 * 1024 * 1024);

console.log("Free Bytes:", freeMemBytes);
console.log("KB:", kb.toFixed(2));
console.log("MB:", mb.toFixed(2));
console.log("GB:", gb.toFixed(2));

console.log("\n");

console.log("Total Bytes:", freeMemBytes);
console.log("KB:", kb2.toFixed(2));
console.log("MB:", mb2.toFixed(2));
console.log("GB:", gb2.toFixed(2));
