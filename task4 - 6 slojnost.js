//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript


//сначала решаем топорно
function duplicateEncode(word){
  let result=[];
  let wordArray = word.toLowerCase().split('');
  let arrayOfDuplicates = wordArray.filter((elem,index,arr) => arr.lastIndexOf(elem) != index)

  for(let i=0; i < wordArray.length; i++){
    if (arrayOfDuplicates.indexOf(wordArray[i]) === -1){
      result.push('(')
    } else{
      result.push(')');
    }
  }
  return result.join('');
}

//В этом решении два перебора, что плохо. Надо сделать за один

//console.log(duplicateEncode('Success'));


function duplicateEncode2(word){
  return word
    .toLowerCase()
    .split('')
    .map((item,index,arr) => {
      return arr.indexOf(item) === arr.lastIndexOf(item)? '(':')'
    })
    .join('')
}

console.log(duplicateEncode2('recede'))
