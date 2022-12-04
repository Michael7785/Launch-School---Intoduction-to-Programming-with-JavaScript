function isBlank(str) {
    return str.trim().length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
