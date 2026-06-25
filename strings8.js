// str.split(separator);
// Output is always array
// Separator decides splitting
// Original string remains unchanged
// converts string into array

let str1 = "GOOGLE"
console.log(str1);
let arr1 = str1.split("");
console.log(arr1);

let str2 = "OPENAI,GOOGLE,MICROSOFT"
console.log(str2);
let arr2 = str2.split(",");
console.log(arr2);

let str3 = "OPENAI-GOOGLE-MICROSOFT"
console.log(str3);
let arr3 = str3.split("-");
console.log(arr3);