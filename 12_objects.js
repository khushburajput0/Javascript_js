/* How to declare objects by  constructor */

// const tinderUser=new Object()      //singleton 
// const tinderUser={}                //non-singleton

const tinderUser={}  
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"same@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Rishu",
            lastName:"Rajput"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)    //static method copy all enumerable own properties
// const obj3={...obj1,...obj2}        //mainly used
// console.log(obj3)


// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('id'))



/* DESTRUCTURING OF OBJECT */
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Khushu"
}

// course.courseInstructor

const {courseInstructor:instructor} =course
// console.log(courseInstructor)
console.log(instructor)

//destructing of aaray is very rare

/******API*******/
// {
//     "name":"Rishu";
//     "courseName":"js in hindi";
//     "price":"free"
// }