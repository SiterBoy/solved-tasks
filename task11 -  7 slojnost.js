// Учитывая ввод массива цифр, верните массив с каждой цифрой, увеличенной на ее позицию в массиве: первая цифра будет увеличена на 1, вторая цифра на 2 и т. Д. Обязательно начинайте отсчет своих позиций с 1 ( а не 0).

// Ваш результат может содержать только однозначные числа, поэтому, если добавление цифры с ее позицией дает вам многозначное число, должна быть возвращена только последняя цифра числа.

// Примечания:
// вернуть пустой массив, если ваш массив пуст
// массивы будут содержать только числа, поэтому не беспокойтесь о проверке этого
// Примеры
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2

function incrementer(nums) { 
  let result = [];

    for (let i=0; i<nums.length; i++){
      if (String(nums[i] + i+1).length > 1) {
        result.push((nums[i] + i+1) % 10);
      } else {
        result.push(nums[i] + i+1)
      }
    }
  return result;
}


//console.log(incrementer([4, 6, 9, 1, 3]));


//Пробуем решить через map

function incrementer2(nums){
  return nums.map((elem,index) => String(elem + index + 1).length === 1 ? elem + index + 1 : (elem + index + 1) % 10)
}


console.log(incrementer2([4, 6, 9, 1, 3]))

//На codewars  нашел совсем гениальное решение: (остаток от деления числа меньше 10 на 10 всегда равен самому числу +) )

function incrementer3(nums){
  return nums.map((elem,index) => (elem + index + 1) % 10 );
}


console.log(incrementer3([4, 6, 9, 1, 3]))
