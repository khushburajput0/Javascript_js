//ESG

// class User {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const Khush=new User("Khushbu","Khushu@gmail.com",123)
// console.log(Khush)
// console.log(Khush.encryptPassword())

//behind the scene
function User(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const tea=new User("tea","tea@gmail.com","567")

console.log(tea.encryptPassword());
