// ROT13 - это простой шифр подстановки букв, который заменяет букву буквой из 13 букв после нее в алфавите. ROT13 - это пример шифра Цезаря.

// Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. Если в строку включены числа или специальные символы, они должны быть возвращены как есть. Следует сдвигать только буквы латинского / английского алфавита, как в оригинальной "реализации" Rot13.


function rot13(message){
  let resultMessage = '';
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  message.toLowerCase().split('').forEach((elem,index)=>{
    let currentIndex = letters.indexOf(elem);
    if (/[^a-zA-Z]/.test(elem)) {
      resultMessage += elem;
    } else if (currentIndex + 13 >= letters.length){
      let targetIndex = 13 - (letters.length - currentIndex);
      resultMessage += letters[targetIndex];
    } else {
      let targetIndex = currentIndex + 13;
      resultMessage += letters[targetIndex];
    }
  })


  return resultMessage.split('').map((elem,index) => /[A-Z]/.test(message[index])?elem.toUpperCase():elem).join('');
}

console.log(rot13('abcdefghijklmnopqrstuvwxyz'))

//Input: test , Expected Output: grfg ,

//                    abcdefghijklmnopqrstuvwxyz 
// , Expected Outpu   nopqrstuvwxyzabcdefghijklm ,
//  Actual Output:    nopqrstuvwxyzundefinedbcdefghijklm


// Прошлое решение очень сложное....

function rot132(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

console.log(rot132('abcdefghijklmnopqrstuvwxyz'))
