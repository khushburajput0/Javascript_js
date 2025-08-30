const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel_heros.push(dc)           //print array into array
// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc)   //new variable because it returns new array
// console.log(all_heros)

//spread
// const all_heros=[...marvel_heros,...dc];
// console.log(all_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);

//conversion in array
console.log(Array.isArray("khushu"))
console.log(Array.from("khushu"))

//interesting case
console.log(Array.from({name:"Khushu"}))


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))