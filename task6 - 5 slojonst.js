// На этот раз мы хотим написать вычисления с использованием функций и получить результаты. Давайте посмотрим на несколько примеров:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Требования:

// Должна быть функция для каждого числа от 0 («ноль») до 9 («девять»).
// Должна существовать функция для каждой из следующих математических операций: плюс, минус, раз, разделенный по ( divided_byв Ruby и Python).
// Каждый расчет состоит ровно из одной операции и двух чисел.
// Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
// Деление должно быть целочисленным . Например, это должно вернуться 2, а не 2.666666...:
// eight(dividedBy(three()));

//Сначала решаю топорно, как приходит сразу в голову

function zero() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('0' + arguments[0]));
    }
    return eval('0' + arguments[0]);
  }
  return 0;
}
function one() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('1' + arguments[0]));
    }
    return eval('1' + arguments[0]);
  }
  return 1;
}
function two() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('2' + arguments[0]));
    }
    return eval('2' + arguments[0]);
  }
  return 2;
}
function three() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('3' + arguments[0]));
    }
    return eval('3' + arguments[0]);
  }
  return 3;
}
function four() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('4' + arguments[0]));
    }
    return eval('4' + arguments[0]);
  }
  return 4;
}
function five() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('5' + arguments[0]));
    }
    return eval('5' + arguments[0]);
  }
  return 5;
}
function six() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('6' + arguments[0]));
    }
    return eval('6' + arguments[0]);
  }
  return 6;
}
function seven() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('7' + arguments[0]));
    }
    return eval('7' + arguments[0]);
  }
  return 7;
}
function eight() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('8' + arguments[0]));
    }
    return eval('8' + arguments[0]);
  }
  return 8;
}

function nine() {
  if (arguments[0]){
    if (arguments[0][0] === '/') {
      return Math.floor(eval('9' + arguments[0]));
    }
    return eval('9' + arguments[0]);
  }
  return 9;
}

function plus() {
  return '+' + arguments[0];
}
function minus() {
  return '-' + arguments[0];
}
function times() {
  return '*' + arguments[0];
}

function dividedBy() {
  return '/' + arguments[0];
}

//console.log(one(plus(six())));
//console.log(eight(dividedBy(three())));


// Это, конечно жесть. Решаем через замыкания

function n(left) {
  return function(right){
    return right  ? right(left) : left;
  }
}

let one1 = n(1);
let two1 = n(2);


function plus1(left){
  return function(right) {
    console.log(left,right)
    return left + right;
  }
}

function minus1(left){
  return function(right) {
    console.log(left,right)
    return left - right;
  }
}

console.log(one1(plus1(two1())))
console.log(one1(minus1(two1())))
console.log(one1())
console.log(two1())
