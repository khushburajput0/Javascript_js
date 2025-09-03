/*THIS-current context ,global object*/

const user ={
    username:"Rishu",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website!`)
        console.log(this)
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();
// console.log(this)

// function chai(){
//     let user="khushu"
//     console.log(this.user);          //undefined result because this doesn't work in functions
// }
// chai()



const chai=()=>{
    let user="khushu"
     console.log(this.user);          //undefined result because this doesn't work in arrow functions also
}
// chai()



/*ARROW FUNCTION*/
// const addTwo =(num1,num2) => {
//     return num1+num2

// }

/*implicit return*/
// const addTwo =(num1,num2) => (num1+num2)

const addTwo =(num1,num2) => ({username:"khushu"})   //to return object (syntax)

console.log(addTwo(3,4))