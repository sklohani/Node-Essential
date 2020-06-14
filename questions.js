const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` >`);
};

ask();

const answer = []
process.stdin.on("data", data => {
    answer.push(data.toString().trim());

    if (answer.length < questions.length) {
        ask(answer.length);
    }
    else {
        process.exit();
    }
})

process.on("exit", () => {
    const [name, activity, lang] = answer;
    console.log(`
    Thank You ${name}, go ${activity}, write your ${lang} code!!!
    `)
})