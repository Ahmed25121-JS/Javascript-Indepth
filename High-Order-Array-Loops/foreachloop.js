const coding = ['js','ruby','java','python','cpp']

// prototypes are some properties which are given to objects or arrays by default because
// some operations are performed very commonly on array and objects respectively

// coding.forEach( (item) => {
//     console.log(item);
    
// }
// )

function printMe(item) {
    console.log(item);
    
}

// coding.forEach(printMe)


// for each has access to all items in an array,index of items, and the whole array list
// coding.forEach( (item,index ,arr) => {
//     console.log(item,index,arr);
    
// } )


const myCoding = [
    
    {
    languageName:'javascript'
    , languageFilename:'js'
},
    {
    languageName:'java'
    , languageFilename:'jv'
},
    {
    languageName:'python'
    , languageFilename:'py'
}


]

myCoding.forEach((item) => {
 console.log(item.languageName);
 
})



