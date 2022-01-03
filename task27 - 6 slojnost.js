// Напишите функцию, которая принимает на вход целое число и возвращает количество битов, равных единице в двоичном представлении этого числа. Вы можете гарантировать, что ввод неотрицательный.

// Пример : двоичное представление 1234is 10011010010, поэтому функция должна возвращать 5в этом случае

var countBits = function(n) {
  return n.toString(2).split('').reduce((acc,elem) => {
    if (elem === '1') acc++;
    return acc;
  },0);
};


console.log(countBits(1234));

// второй способ

var countBits2 = function(n) {
 return n.toString(2).split('').filter(elem => elem == 1).length;
}


console.log(countBits2(1234));
