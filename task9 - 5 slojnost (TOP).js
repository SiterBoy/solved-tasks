// Завершите функцию, scramble(str1, str2)которая возвращает, trueесли часть str1символов может быть переставлена ​​для соответствия str2, в противном случае возвращает false.

// Примечания:

// Будут использоваться только строчные буквы (az). Никакие знаки препинания и цифры не будут включены.
// Необходимо учитывать производительность
// Input strings s1 and s2 are null terminated.
// Примеры
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2){

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  let obj1 = {}, obj2 = {};

  for(item of arr1){
    obj1[item]?obj1[item]++:obj1[item] = 1;
  }

  for(item of arr2){
    obj2[item]?obj2[item]++:obj2[item] = 1;
  }

  console.log(obj2,obj1)
  for (item in obj2){
    if (!obj1[item]) return false;
    if (obj1[item] < obj2[item]) return false;
  }

  return true;
}


console.log(scramble('rkqodlw', 'world'));


//второе решение

function scramble2(str1,str2){
  return [...str2].every(elem =>  str2.split(elem).length <= str1.split(elem).length);
}

console.log(scramble2('rkqodlw', 'world'));
