class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return `${this._password}Khushbu`
    }

    set password(value){
        this._password=value.toUpperCase();
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value.toUpperCase();
    }
}

const khushbu=new User("khushu@google.com","abc")
console.log(khushbu.password)
console.log(khushbu.email)