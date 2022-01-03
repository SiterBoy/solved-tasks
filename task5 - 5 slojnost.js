//Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
  for(let i = arr.length - 1 ; i >= 0; i--){
    if (arr[i] === 0){
      arr.splice(i,1);
      arr.push(0);
    }
  }

  return arr;
}

console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));


//пробуем решить через второй новый массив


function moveZeros2(arr) {
  let arrNumbers = [];
  let arrZeros = [];
  for (let i = 0; i< arr.length; i++){
    arr[i] !== 0 ? arrNumbers.push(arr[i]):arrZeros.push(0);
  }
  return arrNumbers.concat(arrZeros);

}

console.log(moveZeros2([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));


//через фильтер


function moveZeros3(arr){
  return arr.filter(elem => elem !== 0).concat(arr.filter(elem => elem ===0));
}

console.log(moveZeros3([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));


//  Не обязательно делать второй фильтр, потому что все элементы нули, можно сделать новый массив с нулями

function moveZeros4(arr){
  let arrayNotNulls = arr.filter(elem => elem !== 0);
  let arrayNulls = new Array(arr.length - arrayNotNulls.length).fill(0);
  return arrayNotNulls.concat(arrayNulls);
}

console.log(moveZeros4([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));
