function one(){
const userName="ahmed"

function two(){
    const website="youtube"
    console.log(userName)
}
// console.log(website)

two()
}

// one()

if (true) {
   const userName="ahmed"
    if (userName === 'ahmed') {
        const website = "youtube" 
        // console.log(userName + website);
        
    }

    // console.log(website);
    
}
// console.log(userName);

// Imp & interesting


console.log(
addone(5));
// I can access this function anywhere
function addone(num) {
return num +1
    
}

addtwo(5) /* cannot acccess this */

// Hoisting means I cannot access this function addtwo before it is declared because it is kept inside a variable
const addtwo = function(num){
    return num +2
}
