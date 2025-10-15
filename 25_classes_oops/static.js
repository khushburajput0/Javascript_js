class User {
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username :${this.username}`);
    }

    createId(){
        return `123`
    }
}

const khush=new User("Khushbu")
console.log(khush.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("Iphone","I@phone.com")
console.log(iphone.logMe())