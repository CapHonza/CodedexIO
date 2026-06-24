/* 
    * PATCH:
        * "Chci změnit jednu malou věc - nenahrazuj vše"
        * Použití:
            * Editování existujícího postu, tweetu atd
            * Přidání řádku do bia
            * Update jen ingrediencí v receptu
            * Přidání nového social linku do profilu
            * Změna pouze barvy vlasů u game characteru
*/

// * Příklad PATCH pro změnu username -> !!! PŘIDÁNÍ ŘETĚZCE, né PŘEPIS CELÉHO JMÉNA !!!
// * Opět nutnost cURL
const http = require('http');
// Proměnná se jménem
let username = '@rihanna';

const server = http.createServer((request, response) => {
  if (request.method === 'PATCH') { // Kontrola metody
    // Proměnná pro nová data (je v IFu, takže se s každým použitím 
    // přepíše do prázdna a hodnoty se do ní přidávají pokaždé nové)
    let patchData = ''; 
    // Poslech pro nová data
    request.on('data', (chunk) => {
      patchData += chunk; // Přiřazení jednotlivých částí chunků do proměnné
    });
    // Na konci, když se poslalo vše
    request.on('end', () => {
      console.log('Original Username:', username);

      // * Narozdíl od PUT se zde nepřemazává, ale jen se nový data přilepí k username "+="
      username += patchData;
      
      console.log('Updated Username:', username); // Výpis nového jména

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Username patched!');
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});