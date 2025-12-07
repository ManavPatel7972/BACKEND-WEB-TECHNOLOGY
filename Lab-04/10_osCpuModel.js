const os = require("os");

//  10) Write a Node.js program that prints: (B)
//  • Number of CPU cores
//  • Model name of each core
//  • Network interface details

const cpu = os.cpus();

console.log("CPU = ",cpu);
console.log("Number Of Cor = ",cpu.length);
console.log("Model = ",cpu[0].model);
console.log("speed = ",cpu.speed);

console.log("Network interface details = ",os.networkInterfaces());





