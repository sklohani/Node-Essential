const fs = require("fs");

// Synchronously reading the directory 
console.log("Started Reading Files");
const files = fs.readdirSync("../Node-Global");
console.log("Complete");

console.log(files);
console.log("Finished");

// Asynchronously reading the directory 
// Second Argument is a callback function taking two arguments (error, files-returned from the function.)
fs.readdir("../Node-Global", (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
});
console.log("Finished");