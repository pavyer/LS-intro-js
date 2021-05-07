/*
Create a function that calculates a person's body mass index (BMI). 
It should take two parameters: someone's height (in cm) and weight (in kg). 
The formula for calculating the BMI is as follows:

bmi = weightInKilograms / heightInMeters**2;

Note that formula requires a height in meters, 
but the function takes the height in centimeters 
(1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:
calculateBMI(180, 80); // "24.69"
*/

function calculateBMI(heightInCM, weightInKilograms) {

  let heightInMeters = heightInCM / 100; 

  bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);


  // return weightInKilograms / ((heightInCM / 100) ** 2);

  // so there was a missed requirement which was to return only two decimal 
  // places. In that case it makes sense to call the method for rounding on the
  // bmi variable rather than enclose the last return in parens and call toFixed
  // on it. 
}

console.log(calculateBMI(180, 80)); // "24.69"
