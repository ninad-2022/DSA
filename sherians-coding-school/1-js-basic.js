/*
NOTE:
    JS will check two operand between operators and then evaulte
    String + Number = String
    Number + String = Number
*/

let a = 10;
let b = 20;

console.log("sum of 10 and 20:- " + 10 + 20); //1020
console.log("sum of 10 and 20:- " + (10 + 20)); //30
console.log("sum of 10 and 20:- " + 30); //30

console.log(a + b + " is sum of 10 and 20");
console.log(typeof a + b + " is sum of 10 and 20");

/*

Type Coersion: JS only does concatination with + but when it comes to -, *, /, + it converts string into number
addition will only perform when both side has number else it will do concatination 

*/

console.log("*********** Type Coersion ***********");
console.log("1" + 1);
console.log(2 - "1");
console.log("1" * 2);
console.log("1" / 2);
