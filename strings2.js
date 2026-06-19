let str = "number";
// str[0] = "N";      not supported
console.log(str);
str = "N" + str.slice(1,str.length);
console.log(str);

// Strings are immutable primitives : 
// You can read characters
// But you cannot modify them