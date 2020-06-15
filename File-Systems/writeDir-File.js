const fs = require("fs");

// Creating a new directory...
if (fs.existsSync("assets")){ // Checks if directory already exits.
    console.log("Directory alredy exits.");
} else {
    fs.mkdir("assets", err => {
        if (err) {
            throw err;
        }
        console.log("Directory Created");
    });
};

// Creating a new file...
const content = `
    # This content is written by node.js

    It will create a file and write the content in that.
`;
fs.writeFile("./assets/notes.md", content.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("Files saved");
});
