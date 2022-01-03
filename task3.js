//Передаем в функцию число. Функция должна вернуть количество делителей этого числа

//10->4, 11 -> 2, 54 ->8

function getDivisorsCnt(n){
  let numbersArray = [];
  for (let i=0; i <= n; i++){
    n%i === 0 ? numbersArray.push(i):false;
  }
  return numbersArray.length;
}


//console.log(getDivisorsCnt(54));


//Можно упростить не собирая все в массив, в просто работая с счетчиком

function getDivisorsCnt2(n){
  let counter = 0;
  for (let i=0; i <= n; i++){
    n%i === 0 ? counter++:false;
  }
  return counter;
}

//Сложность у этих алгоритмов будет O(n) Сколько элементов, столько и итераций цикла, но можно сделать в 2 раза меньше

//console.log(getDivisorsCnt2(54));


function getDivisorsCnt3(n){
  let counter = 1;
  for (let i=0; i <= n/2; i++){
    n%i === 0 ? counter++:false;
  }
  return counter;
}

//console.log(getDivisorsCnt3(11));

//И самое лаконичное решение

function getDivisorsCnt4(n){
  for (let i=0, counter = 1; i <= n/2; i++){
    n%i === 0 ? counter++:false;
  }
  return counter;
}

console.log(getDivisorsCnt4(54));
