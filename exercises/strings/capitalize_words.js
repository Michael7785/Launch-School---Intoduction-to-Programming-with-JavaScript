function capitalizer(string) {
    let array = string.split(" ");
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let newWord = word[0].toUpperCase().concat(word.slice(1));
        newArray.push(newWord);
    }
    return newArray.join(" ");
}

let string = 'launch school tech & talk'

console.log(capitalizer(string));
