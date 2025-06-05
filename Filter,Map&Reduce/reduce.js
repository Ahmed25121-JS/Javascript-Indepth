// Reduces an array to a single value after performing operations on it
// Use in shopping carts to calculate total price with rest operator
const myNums =[1,2,3]

// const myTotal =myNums.reduce(function (acc,currVal) {
// console.log(`${acc} and ${currVal}`);

//     return acc+ currVal
// },0)

// console.log(myTotal);


const myTotal =myNums.reduce((acc,currVal)=> acc+currVal,0 )

console.log(myTotal);


const shoppingCart= [
    {
    itemName:'jscourse',
    price:2999
},
    {
    itemName:'pycourse',
    price:999
},
    {
    itemName:'mbcourse',
    price:5999
},
    {
    itemName:'dscourse',
    price:12999
},

]



const priceToPay =shoppingCart.reduce((acc,item) => acc+ item.price,0)
console.log(priceToPay);
