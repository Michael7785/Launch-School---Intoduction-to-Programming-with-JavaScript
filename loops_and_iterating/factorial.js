let rlSync = require('readline-sync');

let num = Number(rlSync.question("What number do you want to factorialize? "));

function factorializer(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorializer(num));
