// using method
// const defangIPaddr = (addres) => addres.split(".").join("[.]");

// without using method
const defangIPaddr = (addres) => addres.replace(/\./g, "[.]");
s;

const a = defangIPaddr("1.1.1.1");
// console.log("a: ", a);
