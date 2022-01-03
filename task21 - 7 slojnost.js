// Для длинного числа верните всю возможную сумму его двух цифр.

// Например 12345: все возможные суммы двух цифр из этого числа:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Поэтому результат должен быть:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

function number(sums) {
  let result = [];
  let sums2 = [...String(sums)];
  for(let i = 0; i < sums2.length-1; i++){
    for (let k = i + 1; k < sums2.length; k++){
      result.push(+sums2[i] + +sums2[k]);
    }
  }
  return result;
}

console.log(number(101));


