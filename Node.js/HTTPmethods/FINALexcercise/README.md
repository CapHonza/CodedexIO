# Můj první REST API Backend

Tento projekt je finálním cvičením z Codédexu, kde jsem od nuly postavil vlastní server v čistém Node.js, který zpracovává všechny základní HTTP metody.

## Co je to REST API?

* **API (Application Programming Interface):** Komunikační rozhraní mezi frontendem a backendem. Server nevrací celou HTML stránku pro lidi, ale vrací jen "surová data" pro jiné programy. Funguje jako číšník – frontend si objedná data, API mu je přinese.
* **REST (Representational State Transfer):** Jsou to "pravidla slušného chování" pro API. Říká, že by se pro specifické akce měly používat správné HTTP metody (CRUD operace).

## Jaké metody tento kód (app.js) zpracovává:

- **GET (Read):** Získání aktuální nálady. (Spouští se přes prohlížeč)
- **POST (Create):** Vytvoření/přidání nové nálady. (Simulováno přesunutím do prázdné proměnné)
- **PATCH (Update):** Částečná úprava. K existující náladě se přilepí (`+=`) nová data.
- **PUT (Update):** Úplný přepis. Původní nálada se kompletně nahradí (`=`) novou.
- **DELETE (Delete):** Smazání nálady. Proměnná se nastaví na `null`.

## Jak to spustit a testovat

1. Spustit server pomocí `node app.js` v terminálu.
2. Otevřít si rozdělený terminál (`Ctrl + Shift + 5`).
3. Pomocí nástroje `cURL` simulovat requesty, např.:
   `curl -X POST http://localhost:3000 -d "Moje nová nálada"`
