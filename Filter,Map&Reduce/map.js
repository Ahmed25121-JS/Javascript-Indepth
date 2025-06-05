const mynums = [1,2,3,4,5,6,7,8,9,10]
// returns a new array after performing the specified function on each item of the array
// const newNumbs =mynums.map( (num) => num+10 )
// console.log(newNumbs);


const newNumbs = mynums.map((num)=> num* 10).map((num) => num+1).filter((num)=>  num>= 40)

console.log(newNumbs);
