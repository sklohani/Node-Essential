const fs = require("fs");

const color = require("./assets/color.json");

color.colorList.forEach( c => {
    fs.appendFile("./assets/colors.md", `${c.color} : ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
        console.log("Appended");
    });
})