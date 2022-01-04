// Числа Фибоначчи - это числа в следующей целочисленной последовательности (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// Такие как

// F (n) = F (n-1) + F (n-2), где F (0) = 0 и F (1) = 1.

// Учитывая число, скажем, prod (для продукта), мы ищем два числа Фибоначчи F (n) и F (n + 1), проверяя

// F (n) * F (n + 1) = прод.

// Ваша функция productFib принимает целое число (prod) и возвращает массив:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// в зависимости от языка, если F (n) * F (n + 1) = prod.

// Если вы не найдете два последовательных F (n), подтверждающих, F(n) * F(n+1) = prodвы вернетесь

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F (n) - самый маленький, например F(n) * F(n+1) > prod.

// Некоторые примеры возврата:
// (зависит от языка)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 
// Примечание:
// Вы можете увидеть примеры для вашего языка в «Образцах тестов».

function productFib(prod){
  let result = [0];

  function fib(n){
    if (result.length === 10) {
      return true;
    }

    if (n===0){
      result.push(n);
      return fib(1);
    }

    result.push(n+n)
    
  }
}
