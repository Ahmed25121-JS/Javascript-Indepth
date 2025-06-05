// const coding = ['js','ruby','java','python','cpp']

// const values = coding.forEach((item) =>{
// console.log(item);
// return item
// })

// console.log(values);
// foreach loop does not return anything(it returns undefined) meaning we cannot store values with return keyword
// when using for each loop


const myNums =[1,2,3,4,5,6,7,8,9,10]
// note revise arrow function 
// unlike for each loop it returns an array of values upon our specified condition
// if we are doing explicit return we must use return keyword or we will get back an empty array
// const newNumbs =myNums.filter((num)=> num > 5)
// console.log(newNumbs); 


// If we want to return values with foreach we will use like this other wise for each doesnt return a value
// const newNumbs =[]
// myNums.forEach((num) => {
// if (num >5) {
//     newNumbs.push(num)
// }

// })
// console.log(newNumbs);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  const usebooks = books.filter((bk) => bk.genre === 2)
//  console.log(usebooks);
 
const useBooks = books.filter((bk) => {
    return bk.publish  >= 1995 && bk.genre =='History'

} )
console.log(useBooks);




