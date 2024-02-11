const num = 266219

const arrayMult = String(num).split('').reduce((a, b) => {
    return +a * +b
})

const degreeOf = arrayMult ** 3

console.log(String(degreeOf).slice(0, 2));