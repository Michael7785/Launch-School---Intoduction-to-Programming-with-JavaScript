let array = [1, 2, 3, 4, 5, 6, 7];
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        continue;
    }
    let newNumber = array[i] + 100;
    newArray.push(newNumber);
}
console.log(newArray);
