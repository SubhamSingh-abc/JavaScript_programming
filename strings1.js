let name1 = "subham";                       // double quote
let name2 = 'subham';                       // single quote
let name3 = `subham`;                       // backticks
let name4 = `my name is ${name1}`;          // template literals
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

// Why Backticks are Special?
// You can insert variables
// let a = 10;
// let b = 20;
// console.log(`Sum is ${a + b}`);
// Output: Sum is 30
// Multi-line strings (SUPER USEFUL in web dev)
// let text = `Hello
// World`;
// This works (no \n needed)