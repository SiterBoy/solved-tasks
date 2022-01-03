// Необходимо выполнить функцию / метод двух самых старых возрастов. Он должен принимать в качестве аргумента массив чисел и возвращать два самых высоких числа в массиве . Возвращаемое значение должно быть массивом в формате [second oldest age, oldest age].

// Порядок переданных чисел может быть любым. В массиве всегда будет как минимум 2 элемента. Если есть два или более самых старых возраста, верните их оба в формате массива.

// Например:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]


function twoOldestAges(ages){
  ages.sort((a,b) => a-b);
  return [ages[ages.length-2], ages[ages.length-1]];
}

console.log(twoOldestAges([1, 2, 10, 8] ));

// улучшенный вариант


function twoOldestAges2(ages){
  return ages.sort((a,b) => a-b).slice(-2);
}

console.log(twoOldestAges2([1, 2, 10, 8]));
