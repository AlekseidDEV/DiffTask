'use strict';

const valueStr = "      54"

const checkStr = (str) => {
    if (typeof str !== 'string') {
       return alert('неа, не пойдет')
    } else if (str.length > 30) {
        console.log(str.trim().slice(0, 30) + '...');
    } else{
        console.log(str.trim());
    }
}

checkStr(valueStr)