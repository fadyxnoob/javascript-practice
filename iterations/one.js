// for 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element === 5){
//         console.log("We are at 5");
//     }
//     console.log(element);
// }


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and i ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

const myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// Break and Continue

for (let index = 0; index <= 10; index++) {
  if(index == 5){
    // console.log('Detected 5');
    break
  }
//   console.log(`The value of i is ${index}`);
    
}

for (let index = 0; index <= 10; index++) {
  if(index == 5){
    console.log('Detected 5');
    continue
  }
  console.log(`The value of i is ${index}`);
    
}

