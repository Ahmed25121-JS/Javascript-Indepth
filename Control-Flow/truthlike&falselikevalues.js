const userEmail =[]

if (userEmail) {
    console.log('got user email');
} else {
console.log('dont have user email');

}

// falsy values (values assumed false)

// false , 0 ,-0 , BigInt 0n ,"" ,null ,undefined ,NaN 

// Truthy Values
// "0", "false" ,"space " ,[],{}, function(){} (empty function)

// How to check if array is empty
// if (userEmail.length === 0) {
//     console.log("array is empty");

// }



// How to check if object is empty
const emptyObject ={}
// Returns an array of the keys of the object Object.keys(emptyObject)
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}

// two false values when comapred with each other are true
// e.g false == 0 , 0 == '' 

// Nullish coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// if values  is null give it 10 used in database like appwrite and firbase
// val1 = null ?? 10
// val1 =undefined ?? 15
val1 = null ?? 10  ?? 15


// Ternary Operator 
// consition? true :false 

console.log(val1)
