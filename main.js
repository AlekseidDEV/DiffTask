'use strict';

const arr = [285, 475, 541, 420, 652, 201, 800]

arr.forEach((num) => {
    if (String(num).slice(0, 1) === '2' ||
        String(num).slice(0, 1) === '4'
    ){
        console.log(num);
    }
})

exitCycle:
for(let i = 2; i <= 100; i++){
    for(let f = 2; f < i; f++){
        if(i % f === 0) continue exitCycle
    }
    console.log(`делители этого числа 1 и ${i}`);
}

