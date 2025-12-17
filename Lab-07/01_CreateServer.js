// 1. Create a hello world webapp using “http” core module in NodeJS. (A)

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Hello world!!</h1>");
  }
});

server.listen(8080, () => {
  console.log("server running at port: 8080");
});
