let inputNumber = 4936;

let onesDigit = inputNumber % 10;

let tensNumber = (inputNumber - onesDigit) % 100;

let  tensDigit = tensNumber / 10;

let thousandsHundredsDigits = (inputNumber - (onesDigit + tensNumber)) / 100;

let hundredsDigit = thousandsHundredsDigits % 10;

let thousandsDigit = (thousandsHundredsDigits - hundredsDigit) / 10;

console.log(`Thousands digit is ${thousandsDigit}`);
console.log(`Hundreds digit is ${hundredsDigit}`);
console.log(`Tens digit is ${tensDigit}`);
console.log(`Ones digit is ${onesDigit}`);

