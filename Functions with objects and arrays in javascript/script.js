// This is rest operator
function calculateCartPrice1(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500));

// Now first 2 vales will go in val1, val2 and rest will
//  go in ...num1 which ...num1(rest operator) will return as an array

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

const user = {
  name: "ahmed",
  price: 199,
};

function handleObject(anyObject) {
  console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({ name: "arfa", price: 199 });


const myNewArray = [200,400,600]

function returnSecondValue (getArray){
return getArray[1]
}
 
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue( [200,400,600]))
