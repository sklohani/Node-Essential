const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "What is your name? ",
    "What would you rather be doing? ",
    "What is your preferred programming language? "
];

const collectAnswer = (questions, done) => {
    const answers = [];
    const [first] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            done(answers);
        };
    };

    rl.question(first, questionAnswered);
};

collectAnswer(questions, answers => {
    console.log(`Thank You for your answer.`);
    console.log(answers);
    process.exit();
});