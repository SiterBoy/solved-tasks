//Написать свои функции Math => round, ceil, floor


Math.round2 = function(number) {
  let array = [...String(number).split('.')];
  if (array.length === 1) return number;

  let result = +array[0];
  +array[1][0] >= 5 ? result++:true;

  return result;
};

Math.ceil2 = function(number) {
  if (Number.isInteger(number)){
    return number;
  } 
  return +[...String(number).split('.')][0] +1;
};

Math.floor2 = function(number) {
  return +[...String(number).split('.')][0];
};

console.log(Math.ceil2(10.01))


///такие сложные манипуляции не требовались, потому parseInt() возвращает целую часть без дробной

Math.round3 = function(number){
  return (number - parseInt(number) >= 0.5) ? parseInt(number)++ : number;
}

Math.ceil3 = function (number){
  return (parseInt(number) === number) ? number: parseInt(number)++;
}

Math.floor3 = function(number) {
  return parseInt(number);
}
