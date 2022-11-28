function evenOrOdd(num) {
    if (!Number.isInteger(num)) {
        console.log("Error: Must be integer");
        return;
    }

    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
