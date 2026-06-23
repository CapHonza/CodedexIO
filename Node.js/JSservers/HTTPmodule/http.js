const http = require('http');

// Create a server object
const server = http.createServer((request, response) => {
  response.write('Hello World!');
  response.end();
});
// Kde server poslouchá
server.listen(3000);