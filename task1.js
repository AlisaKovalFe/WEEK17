'use strict'

let fullPerson = document.querySelector('#fullPerson')
let button = document.querySelector('button')
let surname = document.querySelector('#surname')
let person = document.querySelector('#name')
let patronymic = document.querySelector('#patronymic')


function transform() {
    let arrValue = fullPerson.value.trim()
    let arr = arrValue.split(' ')
    

    if (arrValue !== '') {
        fullPerson.style.display = 'none'
        surname.style.display = 'block'
        person.style.display = 'block'
        patronymic.style.display = 'block'
        for (let i = 0; i < arr.length; i++) {
            surname.value = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1).toLowerCase() 
            console.log(surname.value)
        }
        for (let i = 0; i < arr.length; i++) {
            person.value = arr[1].slice(0, 1).toUpperCase() + arr[1].slice(1).toLowerCase() 
            console.log(person.value)
        }
        for (let i = 0; i < arr.length; i++) {
            patronymic.value = arr[2].slice(0, 1).toUpperCase() + arr[2].slice(1).toLowerCase() 
            console.log(patronymic.value)
        }
    } else if(Number(arrValue)) {
        fullPerson.placeholder = 'вы ниче'
    } else {
        fullPerson.placeholder = 'вы ничего не ввели'
    }
}

button.addEventListener('click', transform)