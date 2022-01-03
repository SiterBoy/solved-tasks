// Пара перчаток
// Приближается зима, нужно готовиться к лыжным каникулам. Цель этого ката - определить количество пар перчаток, которое вы можете собрать из перчаток, которые есть в вашем ящике.

// Пара перчаток состоит из двух перчаток одного цвета.

// Вам предоставляется массив, содержащий цвет каждой перчатки.

// Вы должны вернуть количество пар, которое вы можете составить.

// Вы не должны изменять входной массив.

// Пример :

let myGloves = ['red','green','red','blue','blue'];
// numberOfPairs(myGloves) == 2;// red and blue

let redGloves = ['red','red','red','red','red','red'];
// numberOfPairs(redGloves) == 3; // 3 red pairs

function numberOfPairs(arr){
  let gloveObj = {};
  let counter = 0;

  arr.forEach((elem,index) => {
    if (gloveObj[elem]){
      gloveObj[elem] += 1
    } else {
      gloveObj[elem] = 1;
    }
  })

  for (let key in gloveObj){
    counter += Math.floor(gloveObj[key]/2);
  }

  return counter;
}
console.log(numberOfPairs(myGloves));

//Второй метод через копию массива и его сортировку и один перебор
function numberOfPairs2(arr) { 
  let counter = 0;
  let copyOfArr = [...arr].sort();

  for(let i = 0; i< copyOfArr.length; i++){
    if (copyOfArr[i] === copyOfArr[i+1]){
      counter++;
      copyOfArr.splice(i,2);
      i--;
    }
  }
  return counter;
}

console.log(numberOfPairs2(myGloves));
