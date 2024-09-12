// A closure is the combination of a function bundled together with referencs to its surroundings
//In other words, a closure gives you the access to an outer's functions scope from an inner function
// outer func ke variable ko inner func access kar paye    

//Lexical Scope -> is the ability of a func scope to access var from the parent scope
var username = "Road";

//global scope
function local() {
  //local scope
  console.log(username);
}
local(); //this is called lexical scope

//global scope
function local2() {
  //local scope
  var user = "Road";
}
//console.log(user);
local2(); //this is not lexical scope

//============================================================

//global scope
function subscribe() {
  var name = "Roadside Coder";
  //inner scope2
  function displayName() {
    //inner scope
    console.log(name);
  }
  displayName(); //display name is closure here
}
subscribe();

var u1 = "dhairya";
function makeFunc() {
  var name = "Mozilla";
  function displayName(num) {
    console.log(name, num, u1);
  }
  return displayName;
}
//var myFunc = makeFunc();
makeFunc()(5);


//module pattern  - > mdn
//private counter
