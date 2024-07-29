// we can delete by using the delete keyword

const user = {
    name :" anurag",
    age: "22",
    "my hooby" : "music"
}
// delete user.age;
// delete user["my hooby"];

// console.log(user);
// console.log(user["my hooby"]);

// how to add property dynamically

const property = "firstname";
const name = "Anurag Parjapat"

const user2 = {
    [property]: name,
}

//console.log(user2.firstname);

//iterate through object

const u = {
    name: "anurag",
    age : "22",
    study : "be"
}

for(key in u){
    // console.log(key);
    // console.log(u[key]);
}

//If u have two keys with same name, the first key will be replaced by the second one/


//what is JSON.stringify and JSON.parse
const x = {
    name: "anurag",
    age : 22
}

const str = JSON.stringify(x); // its converted to string

console.log(str);
console.log(JSON.parse(str));  // its again converted to object

//destructuring - > taking out the specific properties of the object

let y = {
    names : "Anurag",
    age: 22
}

const { names } = y;
//how to rename this
const { names : myName} = y;
console.log(myName);


//nested destructuring

let z = {
    nam: "Anurag",
    ag: 45,
    fullname: {
        first: "Hunny",
        last: "Kumar"
    }
}

const { fullname : {first, last} } = z;
console.log(first,last);


// ...params = > rest parameter is always is in the last
// but spread operators can be used in between

function get(fruitList, Fruit, ...args){
    return [...fruitList, ...args, Fruit];
}
console.log(get(["banana", "orange"], "mango", "pine-apple", "annas"));


//shallow copy - > when one object has refernce of other
//deep copy - > when we clone the object