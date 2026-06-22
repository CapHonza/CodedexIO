const fs = require("fs");
// Syntax: fs.unlink(path, callback);
fs.unlink("deletefile.txt", (err) => {
    if (err) {
        console.log("Error while deleting file:", err);
        return;
    }
    console.log("Deleting a file was successful");
});