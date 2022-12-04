let one = compareByLength('patience', 'perseverance'); // -1
let two = compareByLength('strength', 'dignity');      //  1
let three = compareByLength('humor', 'grace');           //  0

function compareByLength(str1, str2) {
    if (str1.length < str2.length) {
        return -1;
    } else if (str1.length > str2.length) {
        return 1;
    } else {
        return 0;
    }
}
console.log(one, two, three);
