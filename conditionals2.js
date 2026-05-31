/* Falsy and Truthy concept :
Falsy = empty / nothing / invalid
Truthy = anything meaningful */

let username = "";
if(username){
    console.log("User Exists");
}else{
    console.log("No such user");
}


if(0){
    console.log("Runs");
}else{
    console.log("Does not runs");
}


if("value"){
    console.log("Value exists");
}else{
    console.log("Value does not exists");
}