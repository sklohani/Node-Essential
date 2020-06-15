const fs = require("fs");

// Rename
fs.renameSync("./assets/colors.md", "./assets/colorData.md");

//  Move
fs.rename("./assets/test.txt", "./test.txt", err => {
    if (err) {
        throw err;
    };
});

//  Delete
setTimeout( () => {
    fs.unlinkSync("./test.txt");
}, 3000);

// We can also rename a directory with "fs.renameSync("oldDir", "newDir")"
// we can remove a directory by..

// To remove dir, remove all files in that dir... 
fs.readdirSync("./dir").forEach(fileName => {
    fs.unlinkSync(`./dir/${filename}`);
})

//  Then removing the empty dir
fs.rmdir("./dir", err => {
    if (err) {
        throw err;
    }
    console.log("Removed");
})

