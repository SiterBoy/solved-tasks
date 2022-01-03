//Для данной последовательности целых чисел верните сумму всех целых чисел с четным индексом, умноженную на целое число в последнем индексе.
//Индексы по порядку начинаются с 0.
//Если последовательность пуста, вы должны вернуть 0.

///[2, 3, 4, 5] => 30

function checkNumbers(array){
  if (array.length === 0) return 0;
  sum = 0;
  for (let i = 0; i < array.length; i += 2) {
    sum += array[i] * array[array.length-1];
  }
  return sum;
}

//console.log(checkNumbers([2, 3, 4, 5]));


//Первая оптимизированная
function checkNumbers2(array){
  if (array.length === 0) return 0;
  
  sum = 0;
  for (let i = 0; i < array.length; i += 2) {
    sum += array[i];
  }
  return sum * array[array.length-1];
}

//console.log(checkNumbers2([2, 3, 4, 5]));

//Вариант через reduce

function checkNumbers3(array){
  if (array.length === 0) return 0;

  let sum = array.reduce((prev, elem, index) => {
    return index % 2 ? prev : prev + elem
  }, 0)
  return sum * array[array.length-1];
}
console.log(checkNumbers3([2, 3, 4, 5]));


