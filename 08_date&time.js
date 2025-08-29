/*DATE-January 1,1970 (arbitrary date)
usually calculate in millisecond*/

let myDate=new Date()
console.log(myDate);

//convert in string
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString());

console.log(typeof(myDate))



//to define a specific date
let myNewDate=new Date(2025,8,20)    //In js month start from 0
console.log(myNewDate.toDateString())

//another formats
let myCreatedDate=new Date("09-20-2025");   //mm-dd-yy
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//to convert in second
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate())

console.log(newDate.getMonth()+1)   //+1 because month start from 0 in js


newDate.toLocaleString('default',{
    weekday:"long",
})