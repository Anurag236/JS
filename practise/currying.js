//currying in javasript
//Currying refers to the process of transforming a function with multiple arity
//into the same function with less arity.

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}
console.log(f(5)(6));

//sum(2)(6)(1)

function sum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum1(2)(6)(1));

//infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log("add " +add(5)(2)(4)(8)());

//currying vs partial application
//Partial application transfrom a function into another function with small arity(no. of arguments, or operands the fuction recieve)

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = sum(10);
console.log(x(5, 6));
console.log(x(1, 2));

//or

console.log(sum(20)(1, 5));

//currying is used in Manipulating DOM

// function updateE1ementText(id) {
//   return function (content) {
//     document.querySe1ector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateE1ementText("heading");

// updateHeader("Subscribe to RoadsideCoder");


//implementation of currying

function curry(func) {
  return function curriedFunc(...args) {
    // console.log(args.length, func.length);
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}
const summ = (a, b, c, d) => a + b + c + d;
const totalSum = curry(summ);
console.log(totalSum(1)(6)(5)(6));
