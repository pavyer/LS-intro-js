// extract language code from locale 
// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractLanguage(locale) {
  // return locale.split(".")[0].split("_")[0]; // yeah this is too convoluted.
  //yeah I thought I had to return en_US

  // succinct solution
  return locale.split("_")[0];

}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

/*
Region code from locale

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
*/

function extractRegion(locale) {
  return locale.split("_")[1]
               .split(".")[0];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
