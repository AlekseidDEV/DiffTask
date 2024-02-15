'use strict';

const value = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'

const checkStr = (str) => {
    if (typeof str !== 'string') {
        alert('неа, не пойдет')
    } else if (str.length > 30) {
        console.log(str.trim().slice(0, 30) + '...');
    }
}

checkStr(value)