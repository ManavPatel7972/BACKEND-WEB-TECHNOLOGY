// 4) Write a program that checks whether the given path is absolute or relative paths. (A)

const path = require("path");

const givenPath = __filename;

const relativePath = "../Lab-02/02_letVarAndConst.html";

console.log(path.relative('C:\\orandea\\impl\\bbb','C:\\orandea\\test\\aaa'));

console.log(path.relative('C:\\orandea\\test\\aaa','C:\\orandea\\impl\\bbb'));


console.log("isAbsolute = ",path.isAbsolute(givenPath));

console.log("isAbsolute = ",path.isAbsolute(relativePath));

