const fibonacciRecursion = (nthNumber) => {
  if (nthNumber <= 2) return 1;
  return fibonacciRecursion(nthNumber - 1) + fibonacciRecursion(nthNumber - 2);
};

const fibonacciIteration = (nthNumber) => {
  //use loop
  let previouspreviousNumber;
  let previousNumber = 0;
  let currentNumber = 1;

  for (let i = 1; i < nthNumber; i++) {
    previouspreviousNumber = previousNumber;

    previousNumber = currentNumber;

    currentNumber = previouspreviousNumber + previousNumber;
  }
  return currentNumber;
};

console.log(fibonacciRecursion(4));
console.log(fibonacciIteration(4));

console.log(fibonacciRecursion(5));
console.log(fibonacciIteration(5));

console.log(fibonacciRecursion(6));
console.log(fibonacciIteration(6));

console.log(fibonacciRecursion(10));
console.log(fibonacciIteration(10));

console.log(fibonacciRecursion(28));
console.log(fibonacciIteration(28));

console.log(fibonacciRecursion(35));
console.log(fibonacciIteration(35));
