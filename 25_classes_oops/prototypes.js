// let myName="Khushbu    "

// console.log(myName.truelength);



let myHeros=["thor","spiderman"]

//object
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is:${this.spiderman}`)
    }
}

Object.prototype.khushbu=function(){
    console.log("Khushbu is present in all objects");
}

heroPower.khushbu()


//inheritance

const User={
    name:"Khushbu",
    email:"Khushu@hmail.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)





let anotherUserName="Khushbuuuuuuu            "
String.prototype.trueLength=function(){
    console.log(`True Length is:${this.trim().length}`);
}
anotherUserName.trueLength()