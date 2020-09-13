const countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

// non-recursion way
// const countDown = (num) => {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done!");
// };

countDown(10);
