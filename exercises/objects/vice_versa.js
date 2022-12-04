let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {};

nestedArray.forEach(function(el) {
    person[el[0]] = el[1];
});

console.log(person);
