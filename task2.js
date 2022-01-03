//нужно написать новую функцию в класс String через прототип. Функция должна при вызове делать все первые буквы заглавными 
//'Привет я маленький пукающий герман, который вечно плачет' => 'Привет Я Маленький Пукающий...'


//Первый вариант с split и map
String.prototype.changeRegister = function(){
  let str1 = this.split(' ');
  return str1.map(elem => str = elem[0].toUpperCase() + elem.slice(1)).join(' ');
}

console.log('How can mirrors be real if our eyes arent real'.changeRegister());
