const http = require('http');

const server = http.createServer((request, response) => {
    // Základní nastavení:
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';

    if (request.url === '/') {
        content = `
            <h1>Vítejte v Pokemon centru</h1>
            <p>Zde si můžete prohlédnout naše pokemony</p>
            <ul>
                <li><a href="/pikachu">Pikachu</a></li>
                <li><a href="/sylveon">Sylveon</a></li>
            </ul>
        `;
    } else if (request.url === '/pikachu') {
        content = `
            <h1>Pika Pika!</h1>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" alt="Pikachu">
        `;
        console.log("Pika Pika");
    } else if (request.url === '/sylveon') {
        content = `
            <h1>Sylv Sylv</h1>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/700.png" alt="Sylveon">
        `;
        console.log("Sylv Sylv");
    } else {
        statusCode = 404;
        content = '<h1>Error 404: Not Found</h1><p>Page does not exist.</p>';
    }

    response.writeHead(statusCode, {'Content-Type': contentType});
    response.end(content);
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000. Adress is http://localhost:3000");
});