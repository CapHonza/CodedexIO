const http = require('http');

const server = http.createServer((request, response) => {
    // * Základní nastavení se dají nastavit do proměnný, abych je stále neopisoval
    // Základní nastavení:
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';

    if (request.url === '/') {
        // * Pokud cesta sedí, tak to printne content
        content = `
            <h1>Vítejte na domovské stránce</h1>
            <p>Zde se dozvíte základní informace</p>
            <img src="https://i.imgur.com/UPHfLGY.png" alt="You want that package? image">
        `;
    } else if (request.url === '/about') {
        content = `
            <h1>Vítej na stránce O mně</h1>
            <p>Zde se dozvíš více informací o mně a mých zájmech</p>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb25uaHo4bndld2xsOGhqZGo4N2M2MHltYjJrdWw5cGw5YWluZDFvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a45i4PSgJpxHCVY5IM/giphy.gif" alt="About Me picture">
        `;
    } else if (request.url === '/contact') {
        content = `
            <h1>Zde mě můžete kontaktovat</h1>
            <p>Zde máte nabídku kontaktů na mě</p>
            <img src="https://media2.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGZ3ZGd3N3M2aXBtb3p3MjJ5NWxpd2NucnpwM2piYXphZHRnOGxkaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jpaUU4iDKRABZT8LqR/giphy.webp" alt="DM me gif"
        `;
    } else {
        // * Pokud cesta nesedí, tak to hodí 404 Error
        statusCode = 404;
        content = '<h1>404 Not Found</h1><p>Page does not exist.</p>';
    }

    // * writeHead a end se dají napsat až mimo bloky if/else if/else
        // Základní nastavení je jen vytvoření krabic (nic se neodesílá)
        // Potom krabice naplní podle toho, co uživatel chce a vloží do krabice content (stále se nic neodesílá)
        // Až po tom, co projede IFy a vyskočí ven, sjede dolů, narazí na writeHead a end a teprve to odešle prohlížeči
    response.writeHead(statusCode, { 'Content-Type': contentType});
    response.end(content);
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000. Adress is http://localhost:3000");
});