let Person = {
  _firstName: '',
  _age: 35,
  set age (age) {
    if (typeof age === 'number') {
      this._age = age;
      console.log(`Ok, ${this.firstName}'s new age is ${this._age}`);
    } else {
      console.log("That's not a number!");
    }
  },
  get firstName() {
    if (this._firstName) {
      return (`The person's first name is ${this._firstName}!`)
    } else {
      return ("This person doesn't have a name, that's weird.");
    }
  }
}

console.log(Person.firstName);
