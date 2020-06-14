console.log(process.pid);
console.log(process.version.node);

console.log(process.argv)

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const greeting = grab("__greeting");
const user = grab("__user");

console.log(`${greeting} ${user}`)

// In terminal type : node globalProcess __user Shobhit __greeting "Good Morning"