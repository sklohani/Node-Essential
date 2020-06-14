const collectAnswer = require("./lib/collectAnswer");

const questions = [
    "What is your name? ",
    "What would you rather be doing? ",
    "What is your preferred programming language? "
];

const answerEvents = collectAnswer(questions);

answerEvents.on("answer", answer => {
    console.log(`Question Answered : ${answer}`);
});

answerEvents.on("complete", answers =>{
    console.log("From Emitter :- Thank You");
    console.log(answers);
});

answerEvents.on("complete", () => {
    process.exit();
});