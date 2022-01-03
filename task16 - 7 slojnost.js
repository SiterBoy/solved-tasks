// // Task
// // Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 12 is the product of all array's elements except the first element

// The second element 20 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.

//Сначала регаем топорно

function productArray(numbers){
  let result = [];
  if (numbers.length <= 2)  return numbers.reverse();
  for(let i=0; i< numbers.length; i++){
    let value = 1;
    for(let k = 0; k < numbers.length; k++){
      if (k!==i) {
        value *= numbers[k];
      }
    }
    result.push(value);
  }

  return result;
}

//console.log(productArray([1,5,2]));

function productArray2(numbers){
  let sum = numbers.reduce((prev, item) => prev * item);
  return numbers.map(elem => sum / elem);
}

console.log(productArray2([1,5,2]));
