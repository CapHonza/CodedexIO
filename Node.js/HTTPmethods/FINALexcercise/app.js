const http = require('http');

let mood = ''; // Prázdná pro POST ze začátku, pak změna PUTem nebo přidání PATCHEM a 
                // nebo mazání DELETEM. GET dostanu vždy přes prohlížeč
const server = http.createServer((request, response) => {
    if (request.method === 'GET') { // Když dostanu GET (prohlížeč) -> stačí v prohlížeči jít na localhost, zbytek terminál -> curl
        console.log(mood); // Nechám si to pro sebe vypsat i v konzoli
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(mood || 'Mood is empty'); // Vypíše čistě text v prohlížeči
        // * UPDATE: Přidán logický operátor OR (||) jako fallback hodnota
        // * Pokud je mood 'null' (po DELETE), response.end() byvyhodilo chybu
        // * Teď v takovém případě server bezpečně vrátí string 'Mood is empty'
    } else if (request.method === 'POST') {
        // Když chci přidat novou náladu, 
        // tak chci nastavit pokaždé mood na prázdný a zapsat novou
        // ? Uloží se potom ta nová, nebo se přepíše jen pro tento příklad?
        // * UPDATE: Ano, uloží se a funguje to skvěle
        // ? Mám ji vůbec nastavovat prázdnou?
        // * UPDATE: Ano, mám, protože nemám databázi, kam by se připsala nová nálada, jako třeba u HororDB. 
        // * Kdybych ji nepromazal, tak to bude jako PATCH, prostě se slijou dohromady
        mood = ''; 

        request.on('data', (chunk) => {
            mood += chunk; // Při poslání přilepím kousky k prázdné proměnné
        });
        
        request.on('end', () => {
            console.log('New mood:', mood);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Mood recieved!');
        });
    } else if (request.method === 'PATCH') {
        let patchData = ''; // Příprava proměnné, kterou chci přilepit k mood

        request.on('data', (chunk) => {
            patchData += chunk; // Přilepím k moodu příchozí data
        });

        request.on('end', () => {
            console.log('Original mood:', mood); // Printnu si originální náladu
            mood += patchData;
            console.log('Updated mood:', mood); // Printnu si updatovanou náladu

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Mood patched!');
        });
    } else if (request.method === 'PUT') {
        let newMood = ''; // Proměnná pro novou náladu

        request.on('data', (chunk) => {
            newMood += chunk; // Nalepím do nové nálady to, co mi přišlo
        });

        request.on('end', () => {
            console.log('Original mood:', mood); // Print origiínální nálady
            mood = newMood; // Nastavím náladu na tu novou (přepis)
            console.log('New mood:', mood); // Print změněné nálady

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Mood updated!')
        });
    } else if (request.method === 'DELETE') {
        console.log('Original mood:', mood);
        mood = null; // Vymažu náladu
        console.log('Mood deleted!');

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Mood deleted!');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Go back to terminal!');
    }
});

server.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000")
});