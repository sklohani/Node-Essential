const fs = require("fs");

// Creating a readStream
const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "utf-8");

let fileTxt = "";
console.log("Type Something");

// Will read data bit by bit.
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text.`);
    fileTxt += data;
});

// print the first bit of data
readStream.once("data", data => {
    console.log(data);
});

// Finally at the end of completing reading the data.
readStream.on("end", () => {
    console.log("Finished reading.");
    console.log(`Total characters read : ${fileTxt.length - 1}.`);
});