let name1 = {
    firstName : "Anurag",
    lastName : "kumar",
    // printFullName : function(){
    //     console.log(this.firstName + " " + this.lastName);  
    // }
}

//also
let printFullName  =  function(hometown, state){
    console.log(this.firstName + " " + this.lastName+ " "+ "from " + hometown + " , " + state);  
}
printFullName.call(name1, "Dehradun", "Uttrakhand")

let name2 = {
     firstName : "sachin",
     lastName : "saini",
}

//if we want to copy printFullName in name2 we can use call
//using call method, we can do function borrowing
//we can borrow fucntions from other objetcs and 
//use it with the data of some other obj

printFullName.call(name2, "Mandi", "himanchal");
//first arguemnt will be refernce 


//apply - > the only differ bet call $ apply is 
// we pass argumnets in apply as a array list in apply
// and in call we pass it as individual arguments
printFullName.apply(name2, ["Mandi", "himanchal"]);


//bind
// the bind menthod binds the method and return the copy of that menthod
// which can be called later
let printName = printFullName.bind(name2, "Mandi", "himanchal");
printName(); // this will print the name of sachin saini 



//call method allows an object to use the method of anoter object

//callback
// A callback function is a function passed into another function to be executed later.
// A higher-order function is a function that either takes one or more functions as arguments
//  returns a function, or both.

function performTask(task, callback) {
    console.log("Performing task: " + task);
    callback(); // Executing the callback after the task
}

function done() {
    console.log("Task completed!");
}

// 'performTask' is a higher-order function because it accepts a callback function
performTask("Download file", done);

//callback
function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    const name = "Anurag";
    callback(name);
}

// Passing 'greet' as a callback function
processUserInput(greet);


//hof
function higherOrderFunction(callback) {
    callback();
}

function greet() {
    console.log("Hello, world!");
}

// Using 'higherOrderFunction' which accepts another function as an argument
higherOrderFunction(greet);

//constructor
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  
  var person1 = new Person("Vivek", 76, "male");
  console.log(person1);
  
  var person2 = new Person("Courtney", 34, "female");
  console.log(person2);





