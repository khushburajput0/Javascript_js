// function sayMyName(){
//     console.log("K");
//     console.log("h");
//     console.log("u");
//     console.log("s");
//     console.log("h");
//     console.log("u");
// }
// sayMyName();


/* ADD TWO NUMBERS */
// function addTwoNumbers(num1,num2){
//     // console.log(num1+num2);
//     let result=num1+num2;
//     return result;
// }
// const result=addTwoNumbers(3,4);
// console.log("Result:",result)

// function loginUser(username="rishu"){
//     if(username===undefined){        //if(!username){}
//         console.log("Please enter a username")
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser("khushu"));
// console.log(loginUser());



function calculateCartPrice(...num1){   //...rest operator or spread operator but depends on use case
    return num1
}
// console.log(calculateCartPrice(200,400,500)) 


/*Passing object into functions */
const user={
    username:"khushu",
    price:100
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

//direct passing
handleObject({
    username:"rishu",
    price:300
})


const myArray=[200,400,100]
function returnSeconfValue(getArray){
    return getArray[1]
}

console.log(returnSeconfValue(myArray))