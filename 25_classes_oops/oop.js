/*OBJECT LITERAL*/
//this-gives current context

const user = {
    username :"Khushbu",
    loginCount :8,
    signedIn:true,

    getUserDetails:function(){
        console.log("Got user details from database")
        console.log(`username:${this.username}`)
    }
}

//console.log(user.username);
//console.log(user.getUserDetails())

//new is a constructor function

function User(username,loginCount,isLoggedIn){
    this.username=username;                      //left side value variable
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this      //it is implicitly defined
}

const userOne=new User("Khushbu",8,true);
const userTwo=new User("Rishu",10,false);
console.log(userOne);
console.log(userTwo)


//when we use new ,a instance is created 
// 1.new object is created
//2.Constructor function is called
//3.parameters inject in this keyword
//4.we find them inside function