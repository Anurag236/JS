// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");    //if break is not used it will print all the values except default
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("default");
        break;
}