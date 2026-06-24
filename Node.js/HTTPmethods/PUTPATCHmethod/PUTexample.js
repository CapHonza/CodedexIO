/* 
    * PUT a PATCH oboje updatují věci, ale každá jinak
    *PUT:
        * "Tady je nová věc - nahraď tu starou"
        * Používáme pro: update profilového obrázku, výměnu celého CV na pracovní stránce,
            * update uložené adresy s novými informacemi (adrea, město, PSČ)
            * reset game characters staty kompletně odznova 
*/

// * Příklad PUT na kompletní přepis uživatelského jména:
// * Opět potřeba využití cURL
const http = require('http');
// Nastaví se proměná jména
let username = 'lumon-is-life';

const server = http.createServer((request, response) => {
  if (request.method === 'PUT') { // kontrola metody
    // Proměnná pro nová data (je v IFu, takže se s každým použitím 
    // přepíše do prázdna a hodnoty se do ní přidávají pokaždé nové)
    let newUsername = ''; 
    // Poslech pro nová data
    request.on('data', (chunk) => {
      newUsername += chunk; // Přiřazení jednotlivých částí (chunků) do proměnné pro nové jméno
    });
    // Na konci, když se poslalo vše
    request.on('end', () => {
      console.log('Original Username:', username); // Vypíše se staré jméno
      username = newUsername; // Do proměnné username přiřadíme to, co nám přišlo v newUsername po chuncích
      console.log('Updated Username:', username); // Znovu vypíšeme jméno, ale teď už updatované

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Username updated!');
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});