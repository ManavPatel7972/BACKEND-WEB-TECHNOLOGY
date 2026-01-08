// 4) Write a program that parses the given URL, Print protocol, hostname, pathname, and query parameters separately. (A)

const path1 = "path1";
const path2 = "path2";
const path3 = "path3";

const urlPath = "https://www.darshan.ac.in/student/manav?name=Manav&age=20#123";
const url = new URL(urlPath);

// const appendUrl = url.searchParams.append();

console.log("url Obj =>", url);

console.log("protocol:", url.protocol);

console.log("host:", url.hostname);

console.log("path:", url.pathname);
