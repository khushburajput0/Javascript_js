/***********SCOPE**************/

let a=10;
// const b=30;
// var c=30;

if(true){                 //{} scope
    let a=20;
    const b=30;
    //console.log("INNER:",a)
    // var c=30;   //scope problem
}

// console.log(a);
// console.log(b)
// console.log(c)

//NESTED SCOPE -child parent ko access kr skte h
function one(){
    const username ="khushu"

    function two(){
        const website="youtube"
        //console.log(username);
    }
    // console.log(website)         //error in printing because scope of website is only inside {}
    two()
}
// one()

if(true){
    const username="khushu"
    if(username==="khushu"){
        const website=" youtube"
        //console.log(username+website)
    }
}
//console.log(username)     //not defined because of scope


/*NOTE:IMPORTANT */
function addOne(num){
    return num+1;
}
console.log(addOne(1))

//expression
const two=function addOne(num){
    return num+1;
}
console.log(addOne(1))