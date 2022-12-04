
let lastNumber = 10


function sumFunc(n) {
    let sum = 0
    for (let i = 1; i <= n; i++ ) {
        sum += i
    }
    return sum
}

console.log(sumFunc(lastNumber))

let lastNumber2 = 5

function mult(n) {
    let multResult = 1
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
            multResult *= i
        }
        // if (i % 2 !== 0) continue
        //     multResult *= i        // другой вариант
    }
    return multResult
}

console.log(mult(lastNumber2))

let number = 15 

function del(n) {
    for (let i = 2; i < n; i++) {
        if (number % i !== 0) continue
        console.log(i)  
    }
}
del(number)