//https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript


function sendMessage(message){

  function isLetterUpper(index){
    if(index < 0) return false;
    if (mesArr[index].search(/[^A-Za-z]/) !== -1) return false;
    return mesArr[index] === mesArr[index].toUpperCase();
  }
  
  function isLastLetterOnSameButton(index){
    if (index <= 0) return false;
    if (mesArr[index].search(/[^A-Za-z]/) !== -1 || mesArr[index-1].search(/[^A-Za-z]/) !== -1 ) return false;
    return a[mesArr[index].toLowerCase()][0] === a[mesArr[index-1].toLowerCase()][0];
  }

  result = [];

  let a = {
    '.':'1', ',':'11', '?':"111", '!':"1111",
    'a':'2', 'b':'22', 'c':'222',
    'd':'3','e':'33','f':'333',
    'g':'4', 'h':'44', 'i':'444',
    'j':'5','k':'55', 'l':'555',
    'm':'6', 'n':'66', 'o':'666',
    'p':'7','q':'77','r':'777', 's':'7777',
    't':'8','u':'88','v':'888',
    'w':'9','x':'99','y':'999','z':'9999',
    "'":'*', '-':'**', '+':'***','=':'****',
    ' ':'0', 
  }
  
  let mesArr = message.split('');
  let isUpperModeActivated = false;
  let proshlayaKlavisha = '';

  for(let i = 0; i < mesArr.length; i++){
    let currentResult = '';
    
    if(mesArr[i]===' ') {
      if (i!==0 && mesArr[i-1] === ' '){
        result.push(' 0');
      } else {
        result.push('0');
      }
      continue;
    }
    
    if ((!isNaN(mesArr[i])) || (mesArr[i] === '*') || (mesArr[i] === '#')){
   
      if (mesArr[i] === a[mesArr[i-1]]) {
        result.push(' ' + mesArr[i] + '-');
      } else {
        result.push(mesArr[i] + '-');
      }
      continue;
    }

    if(mesArr[i].search(/[^a-zA-Z0-9]/) !== -1){

      if (a[mesArr[i]] === a[mesArr[i-1]]){
        result.push(' ' +a [mesArr[i]]);
      } else {
        result.push(a[mesArr[i]]);
      }
      
      continue;
    }

    if(isLetterUpper(i)){

      if (isLetterUpper(i-1) && (!isLastLetterOnSameButton(i))) {
        currentResult += a[mesArr[i].toLowerCase()]
      } else if (isLetterUpper(i-1) && (!isLastLetterOnSameButton(i))) {
        currentResult += ' ' + a[mesArr[i].toLowerCase()]
      } else  {
        currentResult += '#' + a[mesArr[i].toLowerCase()];
      }
      isUpperModeActivated = true;

    } else {

      if (isUpperModeActivated){
        currentResult += '#' + a[mesArr[i]];
        isUpperModeActivated = false;
      } else if ((!isLetterUpper(i-1)) && (isLastLetterOnSameButton(i))) {
        currentResult += ' ' + a[mesArr[i]]
      } else { 
        currentResult += a[mesArr[i]]
      }
    }
    //console.log(i, mesArr[i], currentResult)
    result.push(currentResult);
  }
  return result.join('');
}

// Мое - '22-#3#3-' 
// Надо - '2 2-#3 3-'

console.log(sendMessage('a2D3'));
