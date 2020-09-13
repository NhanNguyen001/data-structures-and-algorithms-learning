const areThereDuplicates = (...arguments) => {
  return new Set(arguments).size !== arguments.length;
};
console.log(areThereDuplicates(3, 1, 2));
console.log(areThereDuplicates(1, 3, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "e", "a"));
