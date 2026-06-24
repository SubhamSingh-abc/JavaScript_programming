let str = "JavaScript";
console.log(str.slice(4,str.length));     // by slice
console.log(str.slice(-6));               // negative indexing by slice
console.log(str.substring(4,str.length)); // by substring
console.log(str.substring(4,0));          // swaps
console.log(str.slice(4,0));              // gives empty string  

// swap happens in substring when start > end
// no swap heppens in slice when start > end