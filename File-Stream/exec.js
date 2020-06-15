const cp = require("child_process");

// we can type the terminal commands
// cp.exec("open https://google.com");

cp.exec("ipconfig", (err, cmd, stderr) => {
    console.log(cmd);
    console.log(stderr);
});

// "err" is a node.js error
// but if we want to see terminal error third ardument "stderr" is used