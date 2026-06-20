let str = "SUBHAM SINGH";     // accessing string elements
console.log(str[0]);          // using [index]
console.log(str.charAt(0));   // using str.charAt(index)
console.log(str.length);      // length of string
// .length counts: Letters , Spaces , Special characters 
for(let i = 0 ; i < str.length ; i += 1){
    console.log(str.charAt(i));       // console.log(str[i]);
}
// when str[out_of_bound] : undefined behaviour
// when str.charAt(our_of_bound) : "" 

// let str = "";
// console.log(str.length); // 0
// Empty string is valid