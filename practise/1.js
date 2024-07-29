//IIFE - Immdiately Invoked Function Expressions

function square(num) {
  console.log(num * num);
}
square(5);

//We can wrap the function this way
(function square(num) {
  console.log(num * num);
})(11);

//Hoisting
fun();
console.log(x);

function fun() {
  console.log(y);
  var y = 5;

  console.log("Anurag");
}

var x = 10;

//params and arguments
function circle(num) {
  //params
  console.log(num * num);
}
circle(5); //arguments



//spread opertaor & rest operator
function multiply(...nums) {  //here we use it - > called rest operator
  console.log(nums[0]*nums[1]);
}
var arr = [5, 6];
multiply(...arr);  //here we use it - > called spread operator


const fn = (a, x, y, ...nums)=>{
    console.log(nums);
}

fn(4,5,6,3,7,0,1)

// callback functon -> use mdn
// when a function call other function is known as callback function



//diff bet arrow function and normal function
//1 - syntax
function start(num){
    return num*num;
}

const sq = (num) => {
    return num*num;
}

//2 -  Implicit return
const sqq  = (num) => num*num;

//3 -  arguments
function f1(){
    console.log(arguments);
}

f1(1,2,3);

const f2 = () =>{
    console.log(arguments);
}
// f2(1,2,3);


// this keyword
let user = {
    useName : "Anurag Kumar",
    rc1 : ()=>{
        console.log("I love " + this.useName);  // here its pointig to global object
    },
    rc2(){
        console.log("I love " + this.useName);  // here it is pointing to user object
    },
};
user.rc1();
user.rc2();
