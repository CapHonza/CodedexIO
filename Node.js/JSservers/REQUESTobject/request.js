const http = require("http");

// Vytvoření serveru
// "request" (požadavek) = to, co mi leze do serveru (uživatel chce stránku, tak posílá request)
// "response" (odpověď) = to, co můj server posílá zpět (HTML, text, obrázky apod.)
const server = http.createServer((request, response) => {
    // 1. Hlavička = říká prohlížeči "Všechno je OK (200)" a "Posílám ti čistý text (text/plain) s podporou smajlíků (utf8)"
    // * 1. argument = http status code (200, 404, 500), 2. argument = response headers (metadata)
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    // 2. Odpověď a ukončení = zobrazí odpověď a ukončí se
    response.end("🏃🏻‍➡️🚉🍿📺🎞️🥺💔😭😭🍿🥤")
});

// 3. Server se nevypíná, ale neustále hlídkuje a poslouchá na portu, který mu řeknu - standardně 3000 (localhost)
server.listen(3000, () => {
    console.log("Server is listening on port 3000. Adress is http://localhost:3000");
});

// * Užitečná teorie:
/*  
    1) Ping-Pong princip: Prohlížeč (klient) hodí míček (request). Node server ho chytí, něco spočítá a musí hodit míček zpět (response).
        Pokud ho nehodí zpět (vynechání: response.end()), prohlížeč bude donekonečna načítat prázdnou stránku.

    2) Status kódy:
        200 = vše OK
        404 = nenalezeno
        500 = spadnul server

        404 - použití když stránka neexistuje, např:
            if (request.url === "/kontakt") {
                response.writeHead(200, ...);
                response.end("Tady je kontakt.");
            } else {
                response.writeHead(404, ...);
                response.end("Stránka nenalezena!");
            }
        
        500 - použití když např. DB neodpovídá -> dříve v kurzu try ... catch -> dává se do catch jako 
            error 500 "Omlouváme se, chyba je na naší straně ..."
*/
