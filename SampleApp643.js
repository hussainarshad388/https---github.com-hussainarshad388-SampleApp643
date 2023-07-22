const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Azure! This is a test deployment.\n');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
