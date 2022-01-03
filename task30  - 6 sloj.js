// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  //your code here
  let isArrayWithOddNumbers;
  let resultArray = [];
  let oddElems = 0, evenElems = 0;
  
  for(let i = 0; i <= 2; i++){
    integers[i] % 2 === 0 ? oddElems++: evenElems++;
  }


  if(oddElems>evenElems){
    resultArray = integers.filter(elem => elem%2!==0);
  } else {
    resultArray = integers.filter(elem => elem%2===0);
  }
  return resultArray[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));


//Другое решение, которое делает 2 прохода по массиву

function findOutlier2(integers){
  let odd = integers.filter(elem => elem % 2 === 0);
  let even = integers.filter(elem => elem % 2 !== 0);

  return odd.length === 1? odd[0]: even[0];
}

console.log(findOutlier2([160, 3, 1719, 19, 11, 13, -21]));

// Третье решение самое лучшее на мой взгляд. Один проход

function findOutlier3(integers){
  let res;
  let odd = integers.filter(elem => {
    if (elem % 2 !== 0) res = elem;
    return elem % 2 === 0 ;
  })

  return odd.length === 1? odd[0]:res;
}

console.log(findOutlier3([160, 3, 1719, 19, 11, 13, -21]));
