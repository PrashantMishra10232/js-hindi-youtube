//for

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value : ${j} and outer loop value : ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

//