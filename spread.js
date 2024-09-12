//rest
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Outputs: 10
  console.log(sum(5, 10));     // Outputs: 15

  
  
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Outputs: 1
console.log(rest);  // Outputs: [2, 3, 4, 5]


const { name, ...otherInfo } = { name: "Alice", age: 25, city: "Wonderland" };

console.log(name);      // Outputs: Alice
console.log(otherInfo); // Outputs: { age: 25, city: "Wonderland" }

//spread
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const allNumbers = [...numbers, ...moreNumbers];

console.log(allNumbers); // Outputs: [1, 2, 3, 4, 5, 6]


const nums = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...nums)); // Outputs: 6


const person = { name: "Bob", age: 30 };
const job = { title: "Engineer" };

const employee = { ...person, ...job };

console.log(employee); // Outputs: { name: "Bob", age: 30, title: "Engineer" }


// Summary:
// Rest Operator (...):

// Used in function parameters to collect arguments into an array.
// Used in array and object destructuring to collect remaining elements or properties.
// Spread Operator (...):

// Used to spread elements of an array or properties of an object into new arrays or objects.
// Useful for copying, merging, and expanding data.
