const user = []

if(user){
   //console.log("Got user mail");
}else{
   // console.log("Don't have user mail");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(user.length === 0){
    console.log("Array is Empty");
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}

//false == 0  -> true
//false == '' -> true
// 0 == '' -> true

// Nullish Coalescing Operator (??): mostly works on null and undefined

let val;
//val = 5 ?? 10
//val = null ?? 10
//val = undefined ?? 10
//val = null ?? 15 ?? 20
val = null ?? undefined 

console.log(val);


// Terniary Operator
// Condition ? true : false

const price = 100;
price >= 80 ? console.log("more than 80") : console.log("less than 80");