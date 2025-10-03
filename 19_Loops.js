//FOR OF LOOP

const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings="Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue;
    }
    //console.log(`Each char is :${greet}`);
}

//MAPS->store only unique values ,no duplicates
const map=new Map()
map.set('a',1);
map.set('b',2);
map.set('c',3);
//console.log(map.size);
//console.log(map);

for (const [key,value] of map) {
    //console.log(key,":",value);  
}

// for (const key in map) {
//      console.log(key);
//}                         (not for map)

/*For of doesn't work on objects*/
const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}

// for (const [key,value] of myObject) {  
// }

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);    
}


const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    //console.log(programming[key]);
}


//FOR EACH LOOP (call back function k naam nhi hote)
const coding=["js","rb","py","java","cpp"]
// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })


const myCoding = [
    {
        language:"javascript",
        languageFile:"js"
    },
    {
        language:"java",
        languageFile:"java"
    },
    {
        language:"python",
        languageFile:"py"
    }
]

myCoding.forEach( (item) => {
   // console.log(item)
    //console.log(item.languageFile);
})



