// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. (B)

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <p>Welcome to Home Page</p>
    `);
  } else if (req.url === "/about") {
    res.end(`
      <h1>About Page</h1>
      <p>This is About Us page</p>
    `);
  } else if (req.url === "/services") {
    res.end(`
      <h1>Services Page</h1>
      <p>services page</p>
    `);
  } else if (req.url === "/contact") {
    res.end(`
      <h1>Contact Page</h1>
      <p>Email: contact@example.com</p>
    `);
  } else if (req.url === "/help") {
    res.end(`
      <h1>Help Page</h1>
      <p>How can we help you?</p>
    `);
  } else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
