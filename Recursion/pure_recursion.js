function collectOddvalues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddvalues(arr.slice(1)));
  return newArr;
}

console.log(collectOddvalues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// collectOddvalues([1, 2, 3, 4, 5])
// [1].concat(collectOddvalues([2, 3, 4, 5]))
//    [].concat(collectOddvalues([3, 4, 5]))
//       [3].concat(collectOddvalues([4, 5]))
//         [].concat(collectOddvalues([5]))
//          [5].concat(collectOddvalues([]))
