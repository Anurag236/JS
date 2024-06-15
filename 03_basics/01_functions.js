function myName(){
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("G")
}

//myName()

//function for adding two numbers

// function addTWoNum(num1, num2){
//    console.log(num1 + num2)
// }

//using return
function addTWoNum(num1, num2){
   const res = num1 + num2
   return res
   //console.log("anurag")  //after return nthg will be print
 }

const result = addTWoNum(4,5)
//console.log("Result is:", result)


function loginUser(username= "Anurag"){
    if(username === undefined){    //(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser("anurag"))
//console.log(loginUser(""))  //empty string
console.log(loginUser())   //undefined



//if a function has multiple arguments as compared to parameter -> use rest(...) operator
// function calculatecartPrice(...num1){
//     return num1
// }
// console.log(calculatecartPrice(200,400,600))

function calculatecartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculatecartPrice(200,400,600,800))


//Passing objects in function

const user = {
    username: "Hunny",
    price: 99
}

function handleObject(anyboject){
    console.log(`Username is ${anyboject.username} and price is ${anyboject.price}`)
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 466
})


//Passing Arrays in function

const myarr = [200,100,500,766]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myarr))
console.log(returnSecondValue([200,100,500,766]))
