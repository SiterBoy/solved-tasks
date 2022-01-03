// Напишите функцию, которая принимает на вход неотрицательное целое число (секунды) и возвращает время в удобочитаемом формате ( HH:MM:SS)

// HH = часы, дополненные двумя цифрами, диапазон: 00–99
// MM = минуты, дополненные двумя цифрами, диапазон: 00–59
// SS = секунды, дополненные двумя цифрами, диапазон: 00–59
// Максимальное время никогда не превышает 359999 ( 99:59:59)


function humanReadable (seconds) {
  let hours = Math.floor(seconds/3600);
  let ostSecond = seconds%3600;
  let minutes = Math.floor(ostSecond/60);
  let ostSec = ostSecond%60;

  function zeros(v){
   return v < 10? '0' + v:v;
  }
  return `${zeros(hours)}:${zeros(minutes)}:${zeros(ostSec)}`;
}

console.log(humanReadable(359999))
