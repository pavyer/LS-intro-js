// write function to log 'Always bet on JavaScript.' to console

// function brendanEichQuote(quote) {
//   console.log(quote);
// }

// or 

function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

// brendanEichQuote('Always bet on JavaScript.');

brendanEichQuote();

function cite(author, quote) {
  // console.log(`${author} said: "" + ${quote}`); // this doesn't work because the string concat operation is not in the ${} also it wouldn't quote it
  console.log(`${author} said: "${quote}"`); // but this does work and quotes the string in quote binding
}

cite('Brendan Eich', 'Always bet on JavaScript.');
