const fib = (n) => {
  let a = 0;
  let b = 1;
  let abc;
  for (i = 1; i < n; i++) {
    abc = a + b;
    a = b;
    b = abc;
  }
};
const x = fib(10);
console.log("x: ", x);
