// for off loop is most used for array of objects but can be used for arrays as well
//  and strings too

// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`each character is ${greet}`);
    
// }

// Maps
const map =new Map()  /* map is a data type similar to an object */
// each key value pair is unique and it remembers the order of insertion
map.set('in',"india")
map.set('fr',"france")
map.set('pk',"pakistan")

// console.log(map);
//  map returns arrays for each key value pair so in order to separate them we use array destructuring

for (const [key,value] of map) {
    // console.log(key ,'is', value);
}


const myObj ={
    game1:'nfs',
    game2:'spiderman'
}


// Objects are not iteratable by for off loops meaning we cant use for off loop on themg
// for (const [key,value ]of myObj) {
//     console.log(key,'is',value);
    
// }
