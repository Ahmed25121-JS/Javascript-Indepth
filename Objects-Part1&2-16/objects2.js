//  This will create a singleton object 
//  const tinderUser = new Object()


  
 const tinderUser= {}
//  this will create a non singleton/multiple instances object 

tinderUser.id ='123abc'
tinderUser.name ='ahmed'
tinderUser.isLoggedin=false

// console.log(tinderUser);

const regularUser= {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:'ahmed',
            lastname:'saeed'

        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:'a',2:'b'
}
const obj2={
    3:'a',4:'b'
}

const obj4={
    3:'a',4:'b'
}

// const obj3= {obj1 ,obj2}
// How to merge objects
// const obj4= Object.assign({},obj1,obj2,obj4)

// How to merge objects using spread operator
const obj3={
    ...obj1, ...obj2
    // this is spread operator
}
// console.log(obj3);

const users =[
    {
        id:1,
        email:'a@gmail.com'
    },
    {
        id:1,
        email:'a@gmail.com'
    },
    {
        id:1,
        email:'a@gmail.com'
    },
]
users[1].email
console.log(tinderUser)


// Important for working with databases
console.log(Object.keys(tinderUser));
// This will return all they keys of the specified object
// in an array which we can loop through

console.log(Object.values(tinderUser));
// This will return all the values of the specified objects
// in an array which we can loop through


console.log(Object.entries(tinderUser));
// Will return an array for each key value pair inside another main array array

// Is used to tell us whether an object has a property will answer in boolean
console.log(tinderUser.hasOwnProperty('isLoggedIn'));






