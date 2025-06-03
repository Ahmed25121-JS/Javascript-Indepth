// immediately invoked function expression
//  we use IFEE when we dont want our function to be polluted by global scope
// and want our function to be executed immediately

(function chai(){
    // name ifee
    console.log("db connected");
    
})();

// we need to end ifee with semicolon or next function will not run because ifee doesnt understand
// the ending of its context sometimes
// (fordefination of function)( for execution)

((name) =>{
    // unnamed ifee
   console.log(`db connected two ${name}`);
   
})("ahmed")
