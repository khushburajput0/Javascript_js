const User={
    _email:'khushu@gmail.com',
    _password:"ABC",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    }
}

const khush=Object.create(User)

console.log(khush.email)