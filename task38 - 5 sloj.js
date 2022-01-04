// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  if (parens.indexOf('()') !== -1) {
    let currentStartIndex = parens.indexOf('()');
    let newParens = parens.slice(0, currentStartIndex) + parens.slice(currentStartIndex+2, parens.length) ;
    return validParentheses(newParens);
  } else {
    return parens.length > 0? false: true;
  }
}

console.log(validParentheses('(())((()())())'));
