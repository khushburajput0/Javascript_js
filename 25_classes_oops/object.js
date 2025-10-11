function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2
console.log(multipleBy5(5));
console.log(multipleBy5.power);

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is:${this.score}`)
}

const chai=new createUser("chai",25);
const tea=new createUser("Tea",250);

chai.printMe();


/*

Here's what happens behind the scene when the new keyword is used:

A new Object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function.This means that it has a access to properties and methhods defined on the 
constructor's prototype.

The constructor is called:The constructor function is called with the specified arguments and this is bound to
the newly created objects.If no explicit return value is specified from the constructor.Javascript assumes this,
the newly created object,to be the intended return value.

The new object is returned:After the returned:after the constructor function has been called,if it doesn't
return a non-primitive value (object,array,function,etc.),the newly created object is returned.

*/
