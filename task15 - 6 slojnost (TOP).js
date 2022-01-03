// Напишите простой парсер, который будет анализировать и запускать Deadfish.

// У Deadfish есть 4 команды, каждая длиной по 1 символу:

// iувеличивает значение (изначально 0)
// d уменьшает значение
// s возводит значение в квадрат
// o выводит значение в возвращаемый массив
// Недействительные символы следует игнорировать.

// parse("iiisdoso") => [ 8, 64 ]


function parse( data )
{
  let result = [];
  let currentItem = 0;

  for(let i = 0; i < data.length; i++){
    if (data[i] === 'i') {
      currentItem++;
    } else if(data[i] === 'd') {
      currentItem--;
    } else if (data[i] === 's'){
      currentItem = currentItem ** 2;
    } else if (data[i] ==='o'){
      result.push(currentItem)
    } else {
      continue;
    }
  }

  return result;
}


console.log(parse("iiisdoso"));


//Решаем через свитч


//Решаем через reduce
