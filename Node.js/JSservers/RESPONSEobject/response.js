const http = require("http");

const server = http.createServer((request, response) => {
    // * response.writeHead() = nastavuje status code a headery pro HTTP před tím, než pošle data
    // * response.write() = posílá odpověď a může být použitý několikrát
    // * response.end() = pošle poslední odpověď a ukončí spojení. Dají se v něm posílat data
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.write("Welcome to Neon Noodles!\n\n");
    response.write("==============\n");
    response.write("LATE NITE MENU\n");
    response.write("==============\n\n");
    response.write("RAMEN\n");
    response.write("1. Quantum Truffle Ramen\n\n");
    response.write("EXTRA TOPPINGS\n");
    response.write("1. Hacktivist Pork\n");
    response.write("2. Cybernetic Egg\n");
    response.write("3. Glowing Scallions\n\n");
    response.end("This is end of the menu and info stream. Thats all :)")
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000. Adress is http://localhost:3000");
});