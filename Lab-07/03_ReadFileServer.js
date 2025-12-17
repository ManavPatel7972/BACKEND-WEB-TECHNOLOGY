// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module (C

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/" || req.url === "/home") {
    filePath = "home.txt";
  } else if (req.url === "/about") {
    filePath = "about.txt";
  } else if (req.url === "/contact") {
    filePath = "contact.txt";
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
    return;
  }

  fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
