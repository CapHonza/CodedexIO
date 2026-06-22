/* Normálně by podle Codedexu bylo správné, abych importoval fs, os a path
    a pracoval dále s nimi. Nechci ale zanášet PC soubory, takže využiju toto
    zadání na procvičení základní logiky a průchod polem */

const affirmations = [
    "Tenhle kód napíšu čistě a na první dobrou!",
    "JavaScript je jen obří skill tree a já ho vyfarmím.",
    "Dneska ten JS Hub posunu zase o solidní kus dál.",
    "Když padne error, je to jen další mechanika k pochopení.",
    "It's always just You vs You."
];

function printRandomAffirmation() {
    // Math.floor -> zaokrouhlí na celé číslo
    // Math.random * aff.length místo 0 - 0.99 vygeneruje 0 - 4 -> násobím počtem položek v poli
    const randomIndex = Math.floor(Math.random() * affirmations.length);

    const randomAffirmation = affirmations[randomIndex];
    console.log("Dnešní status: " + randomAffirmation);
}

printRandomAffirmation();