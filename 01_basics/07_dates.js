// dates

let mydate = new Date();
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toISOString())
console.log(typeof mydate)

// let myCreatedDate = new Date(2024 , 1, 24)
// let myCreatedDate = new Date(2024 , 1, 24)
// let myCreatedDate = new Date(2024 ,0, 23,5,3)
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())   //month starting from 0
console.log(newDate.getDay())

newDate.toLocaleDateString('default',{
    weekday: "long"
})