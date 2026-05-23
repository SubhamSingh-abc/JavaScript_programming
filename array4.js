// ARRAY METHODS IN JAVASCRIPT

// push/pop → work at end (fast)
// shift/unshift → work at start (slow in large arrays)

let arr = [10, 20];

// Initial array
console.log(arr); 
// Output: [10, 20]

// push() → adds element at the end
arr.push("SUBHAM");
console.log(arr); 
// Output: [10, 20, "SUBHAM"]

// push() again → adds another element at the end
arr.push("SUBHAM");
console.log(arr); 
// Output: [10, 20, "SUBHAM", "SUBHAM"]

// pop() → removes last element
arr.pop();
console.log(arr); 
// Output: [10, 20, "SUBHAM"]

// unshift() → adds element at the beginning
arr.unshift(null);
console.log(arr); 
// Output: [null, 10, 20, "SUBHAM"]

// unshift() → adds another element at the beginning
arr.unshift(false);
console.log(arr); 
// Output: [false, null, 10, 20, "SUBHAM"]

// unshift() → adds another element at the beginning
arr.unshift(true);
console.log(arr); 
// Output: [true, false, null, 10, 20, "SUBHAM"]

// shift() → removes first element
arr.shift();
console.log(arr); 
// Output: [false, null, 10, 20, "SUBHAM"]