//Singleton - constructor s jb object bnate h toh vo singleton hota h(Object.create)
//literal s singleton nhi bnta

/* OBJECT LITERALS */ 

//declaring symbol
const mySymbol=Symbol("Key1");

const JsUser ={
    name:"Khushu"  ,      //by default system process name as "name"
    "full name":"Rajput",
    [mySymbol]:"myKey1",
    age:19,
    location:"Dehradun",
    email:"khushu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["age"])
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol])
console.log(typeof(mySymbol))

//to change value
JsUser.email="rishu@gmail.com"
console.log(JsUser.email)

// Object.freeze(JsUser)           //to stop changing values
JsUser.age=20
console.log(JsUser)


//functions
JsUser.greeting =function(){
    console.log("Good Morning!");
}
JsUser.greeting1 =function(){
    console.log(`Good Morning!,${this.name}`);
}
console.log(JsUser.greeting1());