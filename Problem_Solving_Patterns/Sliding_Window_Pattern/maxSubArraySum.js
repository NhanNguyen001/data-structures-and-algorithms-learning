const maxSubarraySum = (arr, number) => {
  if (arr.length <= number) return null;
  let tmpMax = 0;
  let max = 0;
  for (let i = 0; i < number; i++) {
    max += arr[i];
  }
  tmpMax = max;
  for (let i = number; i < arr.length; i++) {
    tmpMax = tmpMax - arr[i - number] + arr[i];
    max = Math.max(tmpMax, max);
  }

  return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 2)); // null
