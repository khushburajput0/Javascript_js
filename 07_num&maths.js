/*NUMBERS */

const score=400;
console.log(score)

const newScore=new Number(100);
console.log(newScore)

console.log(newScore.toString().length);
console.log(newScore.toFixed(1));

const num=123.4556;
console.log(num.toPrecision(3));

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));


/*MATHS */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6))
console.log(Math.max(5,7,8));
console.log(Math.min(4,7,1));

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)


const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min+1))+min)      //+1 -> to avoid ki zero n aye

