

function sayMyName(){
console.log("a");
console.log("h");
console.log("m");
console.log("e");
console.log("d");
}

// sayMyName()


// When we are making the definition(writng the function) of a function number1 and number2 will be called parameters

// function add2Numbers(number1,number2){
//       console.log(number1 + number2);
// }
// This will result undefined because here we are not returning the value just logging it. It will show in console but
// the result of the function will be undefined due to not returning it

// but when we call the function 3 and a will be called as arguments
// var a = add2Numbers(3,"a")

// Here the result will be a string due to concatenation
// console.log(typeof a)

function add2Numbers(number1,number2){
      let result = number1 + number2
      return result
}



const result = add2Numbers(3,6)

// console.log("result:" , result)

function loginUserMessage1(username) {
    if(username === undefined){
    console.log('please enter a username')
    return
    }

 return `just logged in ${username}`
}

// console.log(loginUserMessage("ahmed"))


// if the user doesnt pass any value/argument  then function will give undefined in console 
// so in order  to keep ourself save from this we do this !undefined because undefined is automatically false injjavascript
// so !undefined changes it to true thus causing our if statement to run because if staement is only run when the
// condition is true
// Both the upper function and the function below are the same thing
// Note: empty string "" is also considered false
function loginUserMessage2(username) {
    if(!undefined){
    console.log('please enter a username')
    return
    }

 return `just logged in ${username}`
}
// loginUserMessage()

// now if we dont want our value to be ever undefined we can just put a default value which will be overriden
// when the user passes his own argument.Now the code will never go in the if statement because the value can never be undefined
function loginUserMessage3(username ='ahmed') {
    if(undefined){
    console.log('please enter a username')
    return
    }

 return `just logged in ${username}`
}

console.log(loginUserMessage3('farhan'))