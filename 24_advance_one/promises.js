/*Promises reduces the callback hell means the callback inside callback */
//creation of promise 
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB class,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

//consumption of promise
//resolve is connected to then
promiseOne.then(function(){
    console.log("Promise consumed");
})


//Data Consumption
const promiseSecond=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Khushu",email:"khushbu@google.com"})

    },1000)
})
promiseSecond.then(function(user){
    console.log(user);
})


//Perfect way
const promiseThird=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Khushbu",Password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
promiseThird.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)

})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected")
})



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",Password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromiseFour() {
    try{
    const response=await promiseFour
    console.log(response);
    }catch(err){
        console.log(err);
    }
}
consumePromiseFour();




// //behind the scene of above work
// async function getAllUsers() {
//     try{
//    const response=await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=await response.json()
//    console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})