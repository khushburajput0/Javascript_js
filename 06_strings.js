const name="Khushbu Rajput"
const repoCount=15;
console.log(name+ repoCount);

//String interpulation
/* $ sign to enject variable while printina a line of string instead of concating */
console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gamename = new String ('Khushu-rishu');       //to initalize a string
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));        
console.log(gamename.indexOf('h'));  //to get position of element

//to get substring
const newString=gamename.substring(0,4)
console.log(newString);

//slicing
const anString=gamename.slice(0,2);
console.log(anString);

//trim or replace
const newStringOne=" rishu "
console.log(newStringOne);
console.log(newStringOne.trim())       //remove extra spaces

const url="https://khushu.com/khushu%20rajput"
console.log(url.replace('%20','-'));
console.log(url.includes('khushu'));

console.log(gamename.split('-'));