const Person = {
    firstName: 'Michael',
    lastName: 'Cotten',
    _age: 35,
    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
            console.log(`Ok, the person's new age is ${this._age}.`);
        } else {
            console.log("That isn't a number!");
        }
    }
}

Person.age = 'potato';
