let score="33abc";     

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//if null,value is 0
//if undefined ,value is NaN
//true =>1
//false =>0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true;
//0 => false;
//"" => false;
//"Khushu" => true;

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

/* ********************* OPERATIONS ***************** */
let value=20
let negValue=-value 
console.log(negValue)   

let str1="Khushu"
let str2=" Rajput"

let str3=str1+str2
console.log(str3)


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true) //1  
console.log(+"")  //0

let gameCounter=100;
gameCounter++;
console.log(gameCounter);