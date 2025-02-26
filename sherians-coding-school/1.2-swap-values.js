let x = 10;
let y = 20;

//M1: by using one extra variable
console.log("M1: by using one extra variable");
let z = x;
x = y;
y = z;

console.log("x: ", x);
console.log("y: ", y);
console.log("z: ", z);


//M2: swap without extra variable
console.log("M2: swap without extra variable");
let a = 10;
let b = 20;

a = a + b; //30
b = a - b; //30 - 20 = 10
a = a - b; //30 - 10 = 20

console.log('a: ', a);
console.log('b: ', b);

//M3: swap with  array destructuring assignment
console.log("M3: swap with  array destructuring assignment");
let o = 10;
let p = 20;

[o, p] = [p, o]
console.log("o: ", o);
console.log("p: ", p);