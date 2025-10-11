function SetUserName(username){
    //complex DB calls
    this.username=username
}

function createUser(username,email,Password){
    SetUserName.call(this,username)
    this.email=email;
    this.Password=Password;
}

const chai=new createUser("Khushbu","Khushu@gmail.com",123)
console.log(chai)