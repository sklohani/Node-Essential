const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/file.txt", "utf-8");
const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "utf-8");

// writeStream.write("Hello");
// writeStream.write("World");


// process.stdin.on("data", data => {
//     writeStream.write(data);
// });


// readStream.on("data", data => {
//     writeStream.write(data);
// })

// process.stdin.pipe(writeStream);

readStream.pipe(writeStream);

