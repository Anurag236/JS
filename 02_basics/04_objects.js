//const tinder = new Object();
const tinder = {}

tinder.id = "123"
tinder.name = "anurag";
tinder.loggedin = false;
//console.log(tinder)

const regularuser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anurag",
            lastname: "parjapat"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

//combining two objects

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}   
const obj3 = {obj1 , obj2}
//console.log(obj3)

//using assign method to store the objects in a single object
const obj4 = Object.assign({},obj1,obj2)   // (target,source)
//console.log(obj4)


//but spread method is the best to combine multiple objects
const obj5 = {...obj1, ...obj2}
//console.log(obj5)

const user = [
    {
        id: 1,
        mail : "abc@gmail.com"
    },
    {
        id: 2,
        mail : "def@gmail.com"
    },
    {
        id: 3,
        mail : "ddc@gmail.com"
    }
]

//console.log(user[0].mail)

//console.log(tinder) 
// console.log(Object.keys(tinder))     //return keys
// console.log(Object.values(tinder))   //return values
// console.log(Object.entries(tinder))    //return in array

// console.log(tinder.hasOwnProperty('name'))  //return t/f if property is present or not



//////////////////////////de-structuring////////////////////////

const course = {
     coursename : "js in hindi",
     price: "999",
     courseInstructor : "hitesh"
}

//console.log(course.courseInstructor)

const {courseInstructor : instructor} = course   // {}->destructuing

//console.log(courseInstructor) 
console.log(instructor) 

// {                                    //json format  (object has a name but json doesn't)
//     "name": "anurag",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//apis -> randomuser me
// json formatter -> make us understand json format

