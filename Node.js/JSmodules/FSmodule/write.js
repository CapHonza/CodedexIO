const fs = require("fs");
// Syntax: fs.writeFile(path, data, [options], callback);
const message = "Dear diary, today´s day is 22.6.2026. The weather is hot and sunny. I´m a bit tired but excited for JavaScript";

fs.writeFile("seventh-grade.txt", message, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("Writting file was successful!");
});