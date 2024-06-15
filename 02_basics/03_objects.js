//sirf constructor se hi singleton banega
//Object.create

//object literals se singleton nhi banega

const sym = Symbol("key1")

const user = {
    name: "Anurag",
    "full name" : "anurag parjapat",
    [sym] : "mykey1",
    age: 21,
    location: "chitkara",
    email: "anurag@gmail.com",
    isloggedin: false,
    lastlogindays: ["Monday", "Saturday"]
}

// console.log(user.email)
console.log(user["email"])
// console.log(user["full name"])
// console.log(user[sym])

user.email = "hunny@gmail.com"
//Object.freeze(user)  //it will freeze the user so that no changes will be done
user.email = "abc@gmail.com"
//console.log(user)

user.greeting = function(){
    console.log("hello, i am js");
}

user.greeting2 = function(){
    console.log(`hello, i am js, ${this.name}`);   //$ is used for referencing
}
console.log(user.greeting())
console.log(user.greeting2())

