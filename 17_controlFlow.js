/****if statement****/

// if(condition){  //condition if true,then goes into scope if false then not
//     //scope
// }

//<,>,<=,>=,!=,==,=== -strict equal,!==-check negative sign

// const temp=41
// if(temp<50){
//     console.log("Yes,temp is less than 50")
// }else{
//     console.log("no")
// }

/*SHORT HAND NOTATION*/
// const balance=1000
// if(balance > 500) console.log("yes");

//NESTED loop is used to check multiple conditions

//multiple condition checked
// const userLoggedIn=true;
// const debitCard=true;
// const loggedInFromGoogle=false;
// const loggedInFromEmail=true;

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy")
// }
// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("yup,u r allow") 
// }




/*****SWITCH*****/
// switch(key){
//     case 1:

//     case 2:

//     case 3:

//     default:
// }

// const month=3
// switch(month){
//     case 1:console.log("Jan")
//     break;

//     case 2:console.log("Feb")
//     break;

//     case 3:console.log("Mar")
//     break;

//     default:
//         console.log("Enter a valid value")
//         break;
// }



/***TRUTHY VALUES***/
const userEmail="khushu@gmail.com"
if(userEmail){
    console.log("Got! user email");
}else{
    console.log("Don't have user email");
}

/*FALSY VALUES
false,0,-0,BigInt 0n,"",null,undefined,NaN*/

/*TRUTHY VALUES
[],"0",'false'," ",{},function(){} (empty function)*/

const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("Object is empty")
}

/*NOTE- 
false==0    //true
false==''   //true
0==''       //true */


//NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED
let val1;
// val1 = 4 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

//ternary operator
//condition ? true : false;

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("true") : console.log("false");