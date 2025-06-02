// Singleton when created with constructor
// Object.create - this known as constructor method which creates singleton








// Object Literals 
// Multiple instances when created with literals

const mySym= Symbol("Key1")

const JsUser= {
 name:"ahmed",
 "fullname":"ahmed saeed qazi",
[mySym]:"mykey1",
 age:18,
location:"Rawalpindi",
email:"whattheheck@gmail.com",
isLoggendIn:false,
lastLogInDays:['Monday',"Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // When in brackets give ""
// console.log(JsUser.fullname);

// console.log(  JsUser[mySym]);
// correct syntax of righting a symbol as a key

// How to change change values in an object
JsUser.email ="ahmed25121@gmail"
// How to freeze an object so that you can't change values
// Object.freeze(JsUser)

JsUser.email ="1232345@gmail"
// this change in value will not happen because the object has been freezed

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello js user");
}


JsUser.greeting2 = function () {
    console.log(`Hello js user ${this.name}`);
}




console.log(JsUser.greeting());
console.log(JsUser.greeting2());
// JsUser.greeting()

// console.log(JsUser)



