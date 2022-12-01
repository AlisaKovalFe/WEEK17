Ответы на вопросы теста

1. Существует три типа кавычек: двойны, одинарные, обратные. Разницы между одинарными и двойными нет. 
Если использовать обратные кавычки, то в такую строку можно вставлять произвольные выражения, обернув их в ${…}, также они могут занимать более одной строки

Пример:
let person = 'Kate'
let guestList = `Guests:
 * John
 * Mary
 * ${person}
`;

2. Способы поиска подстроки в строке
1) str.indexOf(substr, pos).
Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

let str = 'La pa ga ha';
console.log( str.indexOf('pa')) // выведет 3

2) похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

var x = 'I have many \'apple\' many phone'
var posLast = x.lastIndexOf('many')
console.log(posLast) // выведет 20

3) search()

var x = 'I have many \'apple\' many phone'
var posSearch = x.search('many') // выведет 7

4) str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.

var x = 'I have many \'apple\' many phone'
var posIncl = x.includes('have')
console.log(posIncl)

3. Многострочные строки также можно создавать с помощью одинарных и двойных кавычек, используя так называемый «символ перевода строки (разрыв строки)», который записывается как \n. все спецсимволы начинаются с обратного слеша, \ — так называемого «символа экранирования». При этом обратный слеш \ служит лишь для корректного прочтения строки интерпретатором, но он не записывается в строку после её прочтения.

Пример:
let guestList = "Guests:\n * John\n * Mary";


4. 
const personaName = 'настя'

if (personaName == '') {
    console.log('пустая строка')
} else {
    console.log(personaName[0].toLocaleUpperCase()  + personaName.slice(1))
}

5. 
let date = new Date(2021, 0, 24, 22, 51)
console.log(date);

7. использовать parseInt возвращает целое число

let str = '120р.'
console.log(parseInt(str))

let str1 = '99€'
console.log(parseInt(str1))


8. 
Метод str.split(delim) разбивает строку на массив по заданному разделителю delim.

Пример:
const greet = 'Hi, Bye'
console.log(greet.split(', '))

Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.

Пример:
const greet1 = ['Hi', 'Bye']
console.log(greet1.join(', '))

9. Math.round = математическое окургление
Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

11. str.trim() — убирает пробелы в начале и конце строки

Пример: 
let massiv2 = '    Apple, Tomato      '
// console.log(massiv2.trim()) // лишних пробелов в начале и концы строки не будет