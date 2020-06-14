const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done = dummy => dummy) => {
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