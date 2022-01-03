// Учитывая неотрицательное целое число, верните массив / список отдельных цифр по порядку.

// Примеры:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]


function digitize(n) {
  return [...n.toString()].map(elem => +elem);
}