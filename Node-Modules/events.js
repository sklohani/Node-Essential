const events = require("events");

const emitter = new events.EventEmitter();

// Event Handler
emitter.on("customEvent", (message, user) => {
    console.log(`${user} : ${message}`);
});

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input == "exit") {
        // Event Emmiter
        emitter.emit("customEvent", "GoodBye!", "Process");
        process.exit();
    }
    // Event Emmiter
    emitter.emit("customEvent", input, "Terminal");
});