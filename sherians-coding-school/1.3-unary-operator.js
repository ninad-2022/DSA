let a = 11; //13
let b = 22; //24

let c = a + b + a++ + b++ + ++a + ++b;
console.log("c: ", c);

console.log("a", a);
console.log("b", b);

// explanation
// 11 + 22 = 33
// 33 + 11 = 44
// 44 + 22 = 66
// 66 + 13  = 79
// 79 + 24 = 103

// in Boolean false is 0 and true is 1
console.log("NOTE-1: in Boolean false is 0 and true is 1");
let x = true;
x++;
console.log("x++: ", x++);

console.log(
  "NOTE-2: you cannot add unary operator during variable declaration and assignment it will give this error: SyntaxError: Invalid left-hand side expression in postfix operation"
);

// let z;
// z=10++
// console.log("z", z);

console.log(
  "NOTE-3: here (+hh) will give 11 and then ++11 will give syntax error"
);
let h = 10;
// let k = ++(++h);
