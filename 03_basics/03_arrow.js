const user = {
    username: "hunny",
    price: 852,

    welcomeMessage: function(){    //this keyword is used to refer current context of the scope
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){                //this keyword is used only in objects not in functions
//     let username = "hunny"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "sam"
//     console.log(this.username)
// }
// chai()


//Arrow Function
const chai = ()=>{
    let username = "sam"
    console.log(this.username)
    console.log(this)
}
//chai()

//basic arrow function
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//const addTwo = (num1,num2)=>  num1+num2    //implicit return -> because of one line statement
//const addTwo = (num1,num2)=>  (num1+num2)    

//if we want to return object
const addTwo = (num1,num2)=>  ({username:"hunny"})    
console.log(addTwo(3,4))

var obj1 = {
    valueOfThis: function(){
      return this;
    }
  }
  var obj2 = {
    valueOfThis: ()=>{
      return this;
    }
  }
  
 console.log(obj1.valueOfThis()); // Will return the object obj1
 console.log(obj2.valueOfThis());

 var variable1 = 23;

let variable2 = 89;

function catchValues(){
  console.log(variable1);
  console.log(variable2);

// Both the variables can be accessed anywhere since they are declared in the global scope
}
catchValues();

var a  = 10
a= 20

const a = 10
