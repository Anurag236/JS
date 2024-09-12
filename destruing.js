// Array Destructuring: Extracts values from arrays and assigns them to variables.
// Object Destructuring: Extracts properties from objects and assigns them to variables.

// Array Destructuring
// Array destructuring allows you to unpack values from arrays into variables.

// Basic Example:
const numbers = [1, 2, 3, 4];

const [first, second, third] = numbers;

console.log(first);  // Outputs: 1
console.log(second); // Outputs: 2
console.log(third);  // Outputs: 3


// Skipping Elements:
const number = [1, 2, 3, 4];

const [, secondd, , fourth] = numbers;

console.log(secondd); // Outputs: 2
console.log(fourth); // Outputs: 4

//default values
const numberss = [1];

const [firstt, seconddd = 2] = numbers;

console.log(first);  // Outputs: 1
console.log(second); // Outputs: 2 (default value)


//object

//1.
// const person = { name: "Alice", age: 25, city: "Wonderland" };

// const { name, age } = person;

// console.log(name); // Outputs: Alice
// console.log(age);  // Outputs: 25


// 2
// const person = { name: "Alice", age: 25 };

// const { name: personName, age: personAge } = person;

// console.log(personName); // Outputs: Alice
// console.log(personAge);  // Outputs: 25


//3
// const person = { name: "Alice" };

// const { name, age = 30 } = person;

// console.log(name); // Outputs: Alice
// console.log(age);  // Outputs: 30 (default value)
