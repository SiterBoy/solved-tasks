// При работе со значениями цвета иногда может быть полезно извлечь отдельные значения компонентов красного, зеленого и синего (RGB) для цвета. Реализуйте функцию, отвечающую этим требованиям:

// Принимает в качестве параметра шестнадцатеричную цветовую строку без учета регистра (например, "#FF9933"или "#ff9933")
// Возвращает Map <String, int> со структурой, в {r: 255, g: 153, b: 51}которой r , g и b находятся в диапазоне от 0 до 255.
// Примечание: ваша реализация не должна поддерживать сокращенную форму шестнадцатеричной записи (т.е. "#FFF")

// Пример
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  let result={};

  let arr = hexString.split('');
  arr.shift();

  let newArray = [];
  for(let i=0; i<arr.length; i+=2){
   newArray.push(arr[i]+arr[i+1])
  }

  newArray.forEach((elem,index) => {
    if (index === 0) result['r'] = parseInt(elem,16);
    if (index === 1) result['g'] = parseInt(elem,16);
    if (index === 2) result['b'] = parseInt(elem,16)
  })

  return result;
  
}

//console.log(hexStringToRGB2('#FF9933'));

//Следующее решение сильно проще...

function hexStringToRGB2(hexString){
  return {
    r: parseInt(hexString.slice(1,3),16),
    g: parseInt(hexString.slice(3,5),16),
    b: parseInt(hexString.slice(5,7),16)
  }
}

console.log(hexStringToRGB2('#FF9933'));
