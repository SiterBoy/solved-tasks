// Цифровой корень - это рекурсивная сумма всех цифр числа.

// Учитывая n, возьмите сумму цифр n. Если это значение состоит из более чем одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Входными данными будет неотрицательное целое число.

// Примеры
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6



function digital_root(n) {
  let nArr = [...String(n)];
  let  sumOfCurrentNumbers = (arr) => arr.reduce((prev,current) => prev += +current,0)
  if(String(sumOfCurrentNumbers(nArr)).length == 1) {
    return sumOfCurrentNumbers(nArr);
  } else {
    return digital_root(sumOfCurrentNumbers(nArr));
  }
}

console.log(digital_root(167));

// Более интересный вариант

function digitalRoot(n) { 
  if (n<10 ) return n;

  return digitalRoot(n.toString().split('').reduce((a,b) => a += +b, 0));
}

console.log(digitalRoot(167));


