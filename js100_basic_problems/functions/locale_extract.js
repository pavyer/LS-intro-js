// extract lang code from locale
// locale combination of lang code, region and char set
// en - lang code; US - region; UTF-8 char set
// en_US.UTF-8 - locale 
/*
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'
*/

/*
function extractLanguage(locale) {
  return locale.substring(0, 2);
}
*/

// can also use split
// return locale.split["_"][0] // Hummm, split is a method man. Not an array.

//let extractLanguage = (locale) => locale.substring(0, 2);

let extractLanguage = (locale) => locale.split("_")[0];

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// region code
/*
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
*/

let extractRegion = (locale) => locale.split("_")[1].split(".")[0];

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

