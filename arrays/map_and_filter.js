let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = function(arr) {
    newArray = arr.map(el => el.length);
    return newArray.filter(el => el % 2 === 1);
}

console.log(oddLengths(arr));
