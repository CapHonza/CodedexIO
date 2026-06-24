const http = require('http');

let status = "Married";

const server = http.createServer((request, response) => {
    if (request.method === 'DELETE') {
        console.log("Original status:", status);
        status = null;
        console.log("Original status deleted");

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Status deleted!");
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end("Go back to your terminal!");
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});