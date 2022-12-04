function calculateBMI(heightInCentimeters, weightInKilograms) {
    let heightInMeters = heightInCentimeters / 100;
    let bmi = weightInKilograms / heightInMeters ** 2;
    let roundedBmi = Math.round(bmi * 100) / 100;
    return String(roundedBmi);
}

console.log(calculateBMI(180, 80));
