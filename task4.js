'use strict'

let button = document.querySelector('button')
let massiv = document.querySelector('#massiv')
let minNum = document.querySelector('#min')
let maxNum = document.querySelector('#max')
let sumNum = document.querySelector('#sum')
let averageNum = document.querySelector('#average')

let arr = []
function getResults() {
    
    function getRandom(min, max) {
        min = - 10
        max = 10
        return (Math.round(Math.random() * (max - min) + min));            
    }
    
    function getMassiv() {        
        for (let i = 0; i < 10; i++) {
            arr.push(getRandom())
        }
        console.log(arr)
        massiv.innerHTML = arr.join(', ')
    }
    getMassiv()

    function min() {
        function sortMassiv(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
        arr.sort(sortMassiv)  
        let minNumber = arr[0]
        console.log(arr)  
        console.log(minNumber)
        minNum.innerHTML = minNumber
    }
    min()

    function max() {
        let maxNumber = arr[arr.length-1]
        console.log(maxNumber)
        maxNum.innerHTML = maxNumber
    }
    max()

    function sum() {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        console.log(sum)
        sumNum.innerHTML = sum
        return sum
    }
    sum()

    function average() {
        let average = (sum()/arr.length)
        averageNum.innerHTML = average
    }
    average()
    
    function mult() {
        let mult = 1
        for (let i = 0; i < arr.length; i++) {
            mult *= arr[i]
        }
        console.log(mult)
        document.querySelector('#mult').innerHTML = mult
        return mult
    }
    mult()

    arr.length = ''
}


button.addEventListener('click', getResults)

