const studentId=23012840
let studentName="Khushbu"
var studentEmail="khushu@gmail.com"       //not generally preferred to use.

// studentId=123;
// console.log(studentId)    //const value can't be changed.

studentName="Rishu"
console.log(studentName)     //value can be changed.

//other way of printing
console.table([studentId,studentName,studentEmail])

/* Note: 1.prefer not to use var because of issue in block scope and functional scope
         2.Its possible that "accountId=123" not need of var,const,let
         3.If we dont assigned any value to variable it becomes undefined
*/