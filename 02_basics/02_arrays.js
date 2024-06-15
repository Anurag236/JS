const boys = ["ram", " shyam", "abhi"]
const girls = ["pinki","ritika","mansi"]

// boys.push(girls)
// console.log(boys)
// console.log(boys[3][2])

const all = boys.concat(girls)    //concat is used for combining two arrays
//console.log(all)


const all_class = [...boys, ...girls]   //using spread method for more readibility
//console.log(all_class)

const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]   //flat is used to print if there are arrays in array
const arr3 = arr2.flat(Infinity)
//console.log(arr3)

console.log(Array.isArray("Anurag"))  //it will return t/f , if it's array or not
console.log(Array.from("Anurag"))   //it will return all elements of array one by one
console.log(Array.from({name: "Anurag"}))   //interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))