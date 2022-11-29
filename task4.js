// let numberRandom = Math.round((Math.random()*10*-10));
// console.log(numberRandom)

let button = document.querySelector('button')

let min = -10
let max = 10

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
    
}

button.addEventListener('click', getRandom)
