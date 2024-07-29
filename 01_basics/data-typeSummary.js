//Primitive - > call by value -> their copy will be genrated at that time

//7 types-> String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2

const isLogginIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId  =Symbol('123')

console.log(id === anotherId)

const bigNumber = 14426555412155522n
console.log(typeof(bigNumber));


//Reference (Non-Primitive)

//Array, Objects, Functions

const heroes = ["anurag", "abhishek", "bhavesh"]

let myObj = {
    name : "anurag",
    age : 12
}

const myFunction = function(){
    console.log("Hello World");
}
myFunction();

console.log(typeof(myFunction));


// memory

//stack -> Prtimitive  -> copy
//heap -> Nom-primitive  -> reference

let name1 = "anurag"
let name2 = name1
name2 = "hunny"

console.log(name1);
console.log(name2);

let userOne = {
    email  : "abc@gmail.com",
    upi : "user@upi"
}

let userTwo = userOne

userTwo.email = "122@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);