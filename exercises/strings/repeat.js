function repeat(num, str) {
    let newString = '';
    for (let i = 0; i < num; i++) {
        newString = newString.concat(str);
    }
    return newString;
}

console.log(repeat(3, 'ha'));
