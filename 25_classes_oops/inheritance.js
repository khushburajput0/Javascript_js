class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`User name is:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) 
        this.email=email;
        this.password=password;
    }
    addCourses(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const Teach=new Teacher("Khushbu","khushu@gmail.com",123);
console.log(Teach.addCourses())