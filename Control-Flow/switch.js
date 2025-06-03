// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
// instead of using multiple if and else if we can use switch statement
// when we use switch staTement  we must use break if we dont use break all of the code 
// after the condition matches will run, except DEFAULT
switch (month) {
    case 1:
        console.log(`january`);
        break;
    case 2:
        console.log(`feb`);
        break;
    case 3:
        console.log(`march`);
        break;
    case 4:
        console.log(`april`);
        break;

    default:
        console.log(`default`);
        
        break;
}