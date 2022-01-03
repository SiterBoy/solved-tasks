// Ваша цель в этом ката - реализовать функцию различия, которая вычитает один список из другого и возвращает результат.

// Он должен удалить все значения из списка a, которые присутствуют в списке, bсохраняя их порядок.

// arrayDiff([1,2],[1]) == [2]
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
  let result = [...a];
  for (let i=0; i< b.length; i++){
    result = result.filter(elem => elem !== b[i]);
  }
  return result;
}


console.log(arrayDiff([3,4], [3]) );


function arrayDiff2(a, b) {
  return a.filter(elem => !b.includes(elem));
}


console.log(arrayDiff2([3,4], [3]) );
