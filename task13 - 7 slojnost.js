// Создайте функцию, которая принимает одно положительное трехзначное целое число и переставляет его цифры, чтобы получить максимально возможное число. Предположим, что аргумент является целым числом.

// Return -1 if the argument is not valid
// Вернуть null( nilдля Ruby, nothingдля Julia), если аргумент недействителен.

// maxRedigit(123); // returns 321


var maxRedigit = function(num) {
  if (num > 999 || num < 100) return null
  return +[...String(num)].sort((a,b) => b-a).join('');
};


console.log(maxRedigit(1354));
