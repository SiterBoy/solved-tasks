// Даны два массива. Надо вернуть третий массив, который составлен из слов первого массива, которые являются подстроками
// второго массива. Дупликаты возвращать нельзя. Результирующий массив должен быть отсортирован по алфавиту

// Пример 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// возвращается ["arp", "live", "strong"]

// Пример 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// возвращается []


// Для начала топорное решение через 2 цикла
function checkArrays(arr1, arr2){
  let resultArray = [];
  for (let i = 0; i < arr1.length; i++){
    for (let k = 0; k < arr2.length; k++){
      if ((arr2[k].includes(arr1[i])) && (resultArray.indexOf(arr1[i]) === -1)) resultArray.push(arr1[i]);

    }
  }
  return resultArray.sort();
}


console.log(checkArrays(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));

/// Второй вариант более изящный. Тут всего один цикл


function checkArrays2(arr1,arr2){
  let str = arr2.join(' ');

  return arr1.filter(item => str.indexOf(item) !== -1).sort();
}

console.log(checkArrays2(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));


