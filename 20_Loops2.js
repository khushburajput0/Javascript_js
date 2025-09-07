const coding=["js","ruby","java","python","cpp"]
coding.forEach((item) => {      //for each doesn't return any value
    //console.log(item)
})

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter( (num) => {
//     return num > 4         // if u open scope then write RETURN
// })
//console.log(newNums)

// const newNums =[]
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums)


// const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (num) => num+10)
//console.log(newNums)


/******CHAINING******/
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newNums =myNumbers
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num>=40)
                    
//console.log(newNums);


//reduce
const arr=[1,2,3]
// const sumWithInitial=arr.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval :${currval}`)
//     return acc+currval
// },0)

const sumWithInitial=arr.reduce((acc,currval) => acc+currval ,0)
//console.log(sumWithInitial)


const shoppingCart = [
    {
        itemName:"js Course",
        price:450
    },
    {
        itemName:"py Course",
        price:200
    },
    {
        itemName:"C Course",
        price:300
    }
]

const totalPrice=shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(totalPrice)







