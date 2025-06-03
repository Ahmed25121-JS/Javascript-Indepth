// This is used to refer the current context in the scope
// meaning it is used to refer the current variables within  object's scope
const user ={
    username:'ahmed',
    price:999,
    welcomeMsg:function () {
console.log(`${this.username} welcome to website`);
console.log(this);

    }
}

// user.welcomeMsg()
// user.username ="sam"
// user.welcomeMsg()

// When we are outside the scope of an object THIS will be an empty object
// console.log(this);


// but when we are in console of browser THIS will refer 
// to the Window object which is the most global object makes clicking and other broswer events possible


// We can not use THIS in a function to access variables
// it only works inside objects


// this function willa give global object in THIS due to function keyword
// function chai(params) {
//     let username ="ahmed"
//     console.log(this); /* wrong*/
    
// }

// chai()



// this function willalso  give global object in THIS due to function keyword
// const chai =  function (params) {
//     let username ="ahmed"
//     console.log(this.username); /* wrong*/
    
// }
// chai()


// but this function will give empty object in THIS due to no-function keyword
// const chai = () => {
// // let username = "ahmed"
// console.log(this);

// }
// chai()


// Explicit return
// const addTwo = (num1,num2)=>{
//     return num1 + num2
//  }

// Implicit return 
// const addTwo = (num1,num2) => num1 + num2

// Implicit return with ()
// const addTwo = (num1,num2) => (num1 + num2)

// if we want to implicitly return object we have to put them in curly braces
const addTwo = (num1,num2) => ({username:'ahmed'})


 console.log(addTwo(3,4));
 
