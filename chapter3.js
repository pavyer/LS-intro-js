/* let inputNumber = 4936;

let onesDigit = inputNumber % 10;

let tensNumber = (inputNumber - onesDigit) % 100; // aahh was doing modulus 100 instead of thinking in terms of modulus 10

let  tensDigit = tensNumber / 10;

let thousandsHundredsDigits = (inputNumber - (onesDigit + tensNumber)) / 100;

let hundredsDigit = thousandsHundredsDigits % 10;

let thousandsDigit = (thousandsHundredsDigits - hundredsDigit) / 10;

console.log(`Thousands digit is ${thousandsDigit}`);
console.log(`Hundreds digit is ${hundredsDigit}`);
console.log(`Tens digit is ${tensDigit}`);
console.log(`Ones digit is ${onesDigit}`);
*/

// Hmm, the easier algorithm is this. What's presented in the solution. Just 
// start dividing by 10 and taking the modulus. 

let number = 4936;

let ones = number % 10;

number = (number - ones) / 10; // don't have to preserve the original number anymore

let tens = number % 10;

number = (number - tens) / 10;

let hundreds = number % 10;

let thousands = (number - hundreds) / 10;

console.log(`Thousands digit is ${thousands}`);
console.log(`Hundreds digit is ${hundreds}`);
console.log(`Tens digit is ${tens}`);
console.log(`Ones digit is ${ones}`);
