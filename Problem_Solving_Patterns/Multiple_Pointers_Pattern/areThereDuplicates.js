const areThereDuplicates = (...args) => {
  args.sort();
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

console.log(areThereDuplicates(3, 1, 2));
console.log(areThereDuplicates(1, 3, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "e", "a"));
