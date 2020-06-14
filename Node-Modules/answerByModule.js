const collectAnswer = require("./lib/collectAnswer");

const questions = [
    "What is your name? ",
    "What would you rather be doing? ",
    "What is your preferred programming language? "
];

collectAnswer(questions, answers => {
    console.log(`Thank You for your answer.`);
    console.log(answers);
    process.exit();
});