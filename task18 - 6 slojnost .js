//Расстояние Хемминга является мерой сходства между двумя строками одинаковой длины. Завершите функцию, чтобы она возвращала количество позиций, в которых входные строки не совпадают.

// Примеры (на JavaScript):

// hamming("I like turtles","I like turkeys")  //returns 3
// hamming("Hello World","Hello World")  //returns 0
// Вы можете предположить, что две входные строки имеют одинаковую длину.


function hamming(a,b) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) counter++
  }

  return counter;
}


console.log(hamming("I like turtles","I like turkeys"))


//filter


function hamming2(a,b){
  return a.split('').filter((elem,index) => elem !== b[index]).length;
}

console.log(hamming2("I like turtles","I like turkeys"))
//Reduce


function hamming3(a,b){
  return a.split('').reduce((prev, _ ,i) => prev + (a[i] !== b[i]),0)
}

console.log(hamming3("I like turtles","I like turkeys"))

