const http = require('http');
// Proměnná je venku, aby se neresetovala při každém requestu
let visitorsCounter = 0

const server = http.createServer((request, response) => { 
    // Základní Codedex kód (podle jejich cvičení)
    if (request.method === 'GET') {
        visitorsCounter++;
        console.log(`Number of visitors: ${visitorsCounter}`);
    }

    /*  // ? Tahák pro praxi
        ? Prohlížeč prý dělá dva requesty naráz (jeden na '/' a druhý na '/favicon.ico') -> počítadlo by prý skákalo po 2
        ? -> Proto bych měl specifikovat i url přísnější podmínkou:
        * if (request.method === 'GET' && request.url === '/') {
        * visitorsCounter++;
        * console.log(`Počet návštěv: ${visitorsCounter}`);
        * 
        * response.witeHead(200, 'Content-Type': 'plain/text; charset=utf-8');
        * response.end(`Počet návštěv: ${visitorsCounter}`);
        * }
    */

    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
    response.end(`Počet návštěv: ${visitorsCounter}`);
});

server.listen(3000, () => {
    console.log("Server listening on: http://localhost:3000");
});