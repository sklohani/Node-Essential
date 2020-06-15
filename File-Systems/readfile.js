const fs = require("fs");

// Synchronously reading the file
const text = fs.readFileSync("../Node-Global/questions.js", "utf-8");
console.log(text);

// Asynchronously reading the file
fs.readFile("../Node-Global/question.js", "utf-8" , (err, text) => {
    if (err) {
        console.log(`An error occured : ${err.message}`);
        process.exit();
    }
    console.log("Files Contents");
    console.log(text);
});

// We can also read binary file, just get rid of "encoding-argument(utf-8)"