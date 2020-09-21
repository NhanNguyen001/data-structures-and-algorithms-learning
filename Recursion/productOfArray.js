// const productOfArray = (array) => {
//   let product = 1;
//   if (array.length === 0) {
//     product = 0;
//     return product;
//   }

//   const helper = (helperInput) => {
//     if (helperInput.length === 0) return;

//     const lastElement = helperInput.pop();

//     product = product * lastElement;

//     helper(helperInput);
//   };

//   helper(array);

//   return product;
// };

// Solution 2
const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
