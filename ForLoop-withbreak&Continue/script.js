//  For loop

for (let index = 0; index < 10; index++) {
    const element = index;
if (element == 5) {
    // console.log("5 is best");
    
}

    // console.log(element);
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
// }

let myArray =['flash',"batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//   console.log(`value of i is ${index} `);
  
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue /* If true continue keyword skips the matched condition
        (in this case will not print 5) when the index matches and the rest of the loop will  continue
           */
    }
  console.log(`value of i is ${index} `);
    
}

