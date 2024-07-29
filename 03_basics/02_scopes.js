//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "hunny"       //child can access parent's variable but not vice-versa

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

//In-case of if-else conditions

if(true){
    const username = "xyz"
    if(username === "xyz"){
        const website = " google"
       // console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

//different ways of declaring functions

console.log(addOne(3))

function addOne(num){
     return num+1;
}

// console.log(addTwo(98))     //hoisting
const addTwo = function(num){
    return num + 2
}
