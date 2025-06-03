// Control Flow/Logic Flow

// if 
const userLoggedIn =true
const DebitCard =true
const LoggedInFromGoogle = false
const LoggedInFromEmail =true

// When using && all conditions must be true
if (userLoggedIn && DebitCard && 2==3) {
console.log("allow to buy course");

}

// When using || (OR) any one condition must be true
if (LoggedInFromGoogle|| LoggedInFromEmail) {
    console.log('user logged in');    
}

 
