const myObj ={
    js:'javascript',
    cpp:"C++",
    rb:'ruby',
    swift:"swift by apple"
}
// For in loop
//  for keys syntax is key for values syntax is myObj[key]

// for (const key in myObj) {
//    console.log(`${key} is shortcut for  ${myObj[key]}`);
   
// }

const prog = ["js",'rb','python','java']
// for in loop on array returns keys of array which are the index value of arrays we can 
// also get values by this way prog[key]
for (const key in prog) {
    // console.log(`${key}`);
    
}
// for in loop on map 
const map =new Map()  /* map is a data type similar to an object */
// each key value pair is unique and it remembers the order of insertion
map.set('in',"india")
map.set('fr',"france")
map.set('pk',"pakistan")

// maps are not iteratable by for in loop
// for (const key in map) {
//     console.log(key);
//     }



