const http = require('http');

let bio = "Jsem student VOŠ v oboru ekonomika a management podniku. Je mi 22 let a nevím, co chci v životě dělat."

const server = http.createServer((request, response) => {
    if (request.method === 'PATCH') { // Kontrola metody
        let patchData = ''; // Prázdná proměnná pro přidání dat
        // Poslech
        request.on('data', (chunk) => {
            patchData += chunk; // Příchozí chunky přilepuju do prázdné proměnné a postupně ji plním
        });
        // Když se mi vše doposílá
        request.on('end', () => {
            console.log("Original bio:", bio); // Printnu si staré bio
            // Přilepím data, která mi přišla k existujícímu biu
            bio += patchData;
            // Printnu si nové bio
            console.log("New Bio:", bio);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Bio updated!');
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Go back to your terminal!');
    }
});

server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});