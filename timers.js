const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime/1000} seconds.`);
}
console.log(`Setting a ${waitTime/1000} second delay!`);

const timer = () => {
    clearInterval(interval);
    console.log("Done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timer, waitTime);