// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.

// Примеры
// [7]должен вернуться 7, потому что это происходит 1 раз (что нечетно).
// [0]должен вернуться 0, потому что это происходит 1 раз (что нечетно).
// [1,1,2]должен вернуться 2, потому что это происходит 1 раз (что нечетно).
// [0,1,0,1,0]должен вернуться 0, потому что это происходит 3 раза (что нечетно).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуться 4, потому что он появляется 1 раз (что нечетно).


//сначала решаем топорно
function findOdd(A) {
  let obj ={};
  for(let item of A){
    obj[item]? obj[item]++: obj[item] = 1;
  }
  
  for(let key in obj){
    if (obj[key]%2 !== 0) return +key;
  }
}

//console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

//В этом методе используются два цикла. Упрощаем. Нашел, что можно решить через XOR, но ничего не понял. Надо будет разобраться


function findOdd2(A){
  console.table(A)
  for(let i=1; i < A.length; i++){
    console.log('Результат XOR ' + A[i-1] + ' и ' + A[i] + ' = ' + A[i-1]^A[i]);
  }
}
findOdd2([1,2,2,3,3,3,4,3,3,3,2,2,1]);
