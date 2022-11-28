let array = [3, 5, 7];

let sumOfSquares = arr => arr.reduce((accum, el) => accum + el * el, 0);

console.log(sumOfSquares(array));
