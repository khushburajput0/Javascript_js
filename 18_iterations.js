//FOR

// const n=10
// for(let i=0;i<n;i++){
//     console.log(i)
// }

for(let index=0;index<10;index++){
    const elements =index;
    //console.log(elements) 
}

for(let i=0;i<10;i++){
    //console.log(`Outer loop value: ${i}`);
    for(let j=0;j<10;j++){
        //console.log(`Inner loop value ${j} and inner loop ${i}`)
    }

}

let MyArray=["flash","batman","superman"]
for(let i=0;i<MyArray.length;i++){
    const elements = MyArray[i]
    //console.log(elements)
}


//important keyword
//1.break 2.continue

for(let i=1;i<=20;i++){
    if(i==5){
        //console.log("5 is detected");
        break;
    }
    //console.log(i);
}


//DO-WHILE LOOP
// while(condition){

// }

let i=0
while(i<=10){
    //console.log(`value of index is ${i}`);
    i+=2
}

let score=1;
do{
    console.log(`Score is ${score}`)
    score++;
}
while(score<=10);