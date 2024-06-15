const id = 12
let email = "abc@gmail.com"
var pass = "12345"
city = "chd"
let state;

//const can't be changed i.e id=2
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

email = "anurag@gmail.com"
pass = "236"
city = "ynr"

console.log(id);

console.table([id,email,pass,city,state])