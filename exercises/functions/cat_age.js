function catAge(years) {
    let age = 0;
    for (let i = years; i > 0; i--) {
        if (i > 2) {
            age += 4;
        } else if (i > 1) {
            age += 9;
        } else {
            age += 15;
        }
    }
    console.log(age);
}


catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
