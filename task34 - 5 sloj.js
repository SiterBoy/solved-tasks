// Что такое анаграмма? Что ж, два слова являются анаграммами друг друга, если они оба содержат одинаковые буквы. Например:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Напишите функцию, которая найдет все анаграммы слова из списка. Вам будет предоставлено два входа - слово и массив со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет. Например:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, words) {
  return words.filter(elem => word.split('').sort().join('') === elem.split('').sort().join(''))
}


console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
