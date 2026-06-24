/* 
    * Delete -> maže: "Hej, tohle už nepotřebuju, prostě to smaž"
    * Použití:
        * Mazání: komentář, zprávat atd atd 
*/
const http = require('http');

let username = 'coolCat123'; // Proměnná se jménem

const server = http.createServer((request, response) => {
  if (request.method === 'DELETE') { // Kontrola metody
    console.log('Original Username:', username); // Print originálního jména
    username = null; // Vymazání proměnné
    console.log('Username deleted.'); // Print, že jméno bylo smazáno

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Username deleted!');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});