/* 
    * Narozdíl od GET (který se spouští klasicky node nazev.js), k ostatním jako třeba POST atd potřebuju tzv. cURL
    * cURL = Client for URLs -> nástroj používaný v terminálu pro komunikaci se serverem
    * Idea:
        * Já = uživatel
        * Node.js = server
        * cURL = způsob, jak posílám zprávu (něco jako "Hej tady jsou nějaká data, na!")
    * Použití:
        * Spuštění serveru node nazev.js
        * Ve druhém terminálu poslat request: curl -X POST http://localhost:3000 -d "Toto je zpráva"
        * curl -> klíčové slovo pro poslání HTTP requestu z terminálu
        * -X -> "flag", která nás nechá specifikovat HTTP metodu, kterou chceme použít (tady POST)
        * http://localhost:3000 -> kam posíláme request
        * -d "Toto je zpráva" -> data, která posíláme v těle requestu
*/

const http = require('http');

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        let message = '';

        /* 
            * chunk -> posílá data po kouscích "chunks" aby se server nezahltil a nespadnul.
            * request.on('data', ...) -> podobné jako button.addEventListener('click', ...) -> říká: Hele servere, poslouchej 
                * a kdykoliv po drátě neco dorazí, spusť tuhle funkci
        */
        request.on('data', (chunk) => {
            message += chunk; // * Když dorazí nový chunk, prostě se přilepí k té proměnné message
        });

        /* 
            * Znova něco jako eventListener -> když zahlásí, že už poslal všechno ('end'), tak to znamená, že máme kompletní zprávu
                * Až teď mohu vypisovat do konzole apod.
        */
        request.on('end', () => {
            console.log('New message:', message);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Message recieved!');
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Go back to your teminal!');
    }
});

server.listen(3000, () => {
    console.log('Server is running at: http://localhost:3000');
});