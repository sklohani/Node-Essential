const cp = require("child_process");

// spawn used to for any asynchronous command like question.js which we used in Node-Modules.
const questionApp = cp.spawn("node", ["question.js"]);

questionApp.stdin.write("Shobhit \n");
questionApp.stdin.write("India \n");
questionApp.stdin.write("Change \n");

questionApp.stdout.on("data", data => {
    console.log(`From the question app : ${data}`);
});

questionApp.on("close", () => {
    console.log("QuestionApp process exited.")
})