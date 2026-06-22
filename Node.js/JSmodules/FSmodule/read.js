const fs = require('fs');
// Syntax: fs.readFile(path, options, callback);
fs.readFile("seventh-grade.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading a file:", err);
    return;
  }
  console.log(data);
})