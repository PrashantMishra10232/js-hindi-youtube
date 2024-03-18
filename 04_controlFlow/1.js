//if

// === operator
// if(2 == "2"){
//     console.log("executed");
// }
if(2 === "2"){  //not only value but also checks the type of variable
    console.log("executed");  
}
else
{console.log("not executed");}

//switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}