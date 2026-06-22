const path = require("path");
// Cesta přes join (je jedno, jestli jsem na Windows nebo Macu, spojí to podle názvů a nemusím řešit lomítka)
// /mnt/c -> na Windows používám WSL ve VSC, jinak by stačilo ("C:", "Users", "Uzivatelske_jmeno") atd...
const desktopPath = path.join("/mnt/c", "1 Stažené Soubory");
// Pole:
const files = ["Jan_Cap.docx", "image.png", "DigiZvuk test.docx"];
const imageExtensions = [".jpg", ".png", ".gif", ".jpeg", ".JPG", ".PNG"];

const firstImage = files.find(file => imageExtensions.includes(path.extname(file)));

if (firstImage) {
    console.log("First image file found:", path.join(desktopPath, firstImage));
} else {
    console.log("No image files found!");
}