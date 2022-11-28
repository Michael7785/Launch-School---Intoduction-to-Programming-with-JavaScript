let rlSync = require('readline-sync');

let num = Number(rlSync.question("What number do you want to factorialize? "));

function factorializer(num) {
    if (num === 1) return 1;
    return num * factorializer(num - 1);
}

console.log(factorializer(num));
