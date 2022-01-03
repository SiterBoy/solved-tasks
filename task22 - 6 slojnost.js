// 6 сложность

// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

function partsSums(ls) {
  if (ls.length === 0) return [0];
  let result = [];
  result[0] = ls.reduce((prev, elem)  => prev += elem, 0)
  for (let i = 1; i < ls.length; i++){
    result.push(result[i-1] - ls[i-1])
  }

  result.push(0);
  return result;
}

console.log(partsSums([0, 1, 3, 6, 10]));

