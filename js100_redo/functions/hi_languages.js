// write function to return greeting in language
// when passed the ISO 639-1 language code 

// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'

function greet(langCode) {
  switch(langCode) {
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Ola!';
      break;
    case 'de':
      return 'Hallo!';
      break;        
    case 'sv':
      return 'Hej!';
      break;
    case 'af':
      return 'Haai!';
      break;       
  }
}

// I was looking at my previous implementation and wondering why it worked
// even though it didn't have the break statement. the reason is because
// the return statement stops function execution at that point and returns 
// whatever it is supposed to. so using "break" in addition to "return" is redundant


console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'

// localGreet('en_US.UTF-8'); // 'Hey!'
// localGreet('en_GB.UTF-8'); // 'Hello!'
// localGreet('en_AU.UTF-8'); // 'Howdy!'

function localGreet(locale) {
  switch(locale) {
    case 'en_US.UTF-8': return 'Hey!';
    case 'en_GB.UTF-8': return 'Hello!';
    case 'en_AU.UTF-8': return 'Howdy!';
    default: return 'Salut!'
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
