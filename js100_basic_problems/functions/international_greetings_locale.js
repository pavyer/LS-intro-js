/*
Implement:
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
*/

function localGreet(locale) {
  
  let langCode = locale.split("_")[0];
  let region = locale.split("_")[1].split(".")[0];

  switch (langCode) {
    case 'en':
      switch (region) {
        case 'US':
          return 'Hey!';
          break;
        case 'GB':
          return 'Hello!';
          break;
        case 'AU':
          return 'Howdy!';
          break;
        default:
          return 'Hey!';
      }
      break;
    case 'fr':
      return 'Salut!';
      break;
  }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

// this works but the point was to reduce this code by using the greet(langCode)
// function we had written earlier
