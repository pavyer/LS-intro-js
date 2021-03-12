// compare length of two strings 
// return -1 if first string is shorter
// return 1 if second is shorter
// return 0 if both are equal
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0

function compareByLength(leftString, rightString) {

  // in this initial implementation I wasn't comparing the length
  // I was directly comparing the strings and I think what happens is 
  // with that the underlying unicode chars get compared
  // for the example calls the return values were
  // -1
  // 1
  // 1
  // so if it weren't for the last call's result. I wouldn't have realized that
  // I missed invoking the length property here.
  // if (leftString > rightString) return 1;
  // else if (leftString < rightString) return -1;
  // else return 0;

  if (leftString.length > rightString.length) return 1;
  else if (leftString.length < rightString.length) return -1;
  else return 0;

}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0
