// Переместите первую букву каждого слова в его конец, затем добавьте «ау» в конец слова. Не трогайте знаки препинания.

// Примеры
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
  let strArr = str.split(' ');
  let resultArr = strArr.map(elem => {
    if((/[A-Za-z]/).test(elem)){
      let elemArr = elem.split('');
      elemArr.push(elemArr[0], 'ay');
      elemArr.splice(0,1);
      return elemArr.join('');
    } else {
      return elem;
    }
  })

  return resultArr.join(' ');
}


console.log(pigIt('Pig latin is cool'))
