const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Problem: The server won't start if port 3000 is already in use.  No error message is thrown to inform the user of the problem.