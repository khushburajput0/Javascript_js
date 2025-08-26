/*There are two types of datatypes
1.Primitive
2.Non-Primitive */

/*Primitive
There are 7 types of primitive datatypes
1.String
2.Number
3.Boolean
4.null
5.undefined
6.Symbol-for uniqueness
7.BigInt-to handle big and signtific value*/ 

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outSideTemp=null
let userEmail;
const id=Symbol('123')
const anid=Symbol('123')
console.log(id===anid)
console.log(id);
const bigNumber=333435436478598776754543n

/*Non-Primitve or reference type
1.Array
2.Objects       (Useful to master in javascript)
3.Functions*/

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name:"khushu",
    age:19
}

//we can treat a function like variable in javascript

const myFunction=function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);           //to know the name of datatype   (null ka typeof=object)

//Note:Javascript is dynamically typed language because type checking occurs at run time//