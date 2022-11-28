function greeter() {
rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?  ");
let lastName = rlSync.question("What is your last name?  ");
return `${firstName} ${lastName}!`;
}

let name = greeter();
console.log(`Hello there, ${name}!`);
