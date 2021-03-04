// function to calculate BMI
// takes two parameters
// height in cm
// weight in kg
// fomula is
// bmi = weightInKilograms / heightInMeters**2;

// formula requires height in meters. 100 cm = 1 meter
// return result -- string rounded to two decimals 
// example: calculateBMI(180, 80); // "24.69"

function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;

  return (weightInKilograms / heightInMeters ** 2).toFixed(2); 
}

console.log(calculateBMI(180, 80));


