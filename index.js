let n = 'jjsljj'
console.log(n.length)

var x = 'I have many \'apple\' many phone'
console.log(x)
var pos = x.indexOf('have')
var posLast = x.lastIndexOf('many')
var posSearch = x.search('many')
var posIncl = x.includes('have')
console.log(pos)
console.log(posLast)
console.log(posSearch)
console.log(posIncl)

// var slice = x.slice(2,10)
// var substrX = x.substr(3,5)
// console.log(slice)
// console.log(substrX)

// var y = x.replace(/maNy/ig, 'foto')
// console.log(y)

// var up = x.toLocaleUpperCase()
// console.log(up)
// var low = x.toLocaleLowerCase()
// console.log(low)

// console.log(x[2])
// console.log(x[x.length-1])

// let massiv = 'Apple,Orange,Tomato'
// let arr = massiv.split(',')
// console.log(arr)
// let glue = arr
// console.log(glue.join(', '))
// let massiv2 = '    Apple, Tomato      '
// console.log(massiv2.trim())
// console.log(massiv2.trim().repeat(3))

// let person = 'Kate'
// let guestList = `Guests:
//  * John
//  * Mary
//  * ${person}
// `;

// console.log(guestList)

// let str = 'La pa ga ha';
// console.log( str.indexOf('pa')) 

//4. 
const personaName = 'настя'

if (personaName == '') {
    console.log('пустая строка')
} else {
    console.log(personaName[0].toLocaleUpperCase()  + personaName.slice(1))
}

const greet = 'Hi, Bye'
console.log(greet.split(', '))

const greet1 = ['Hi', 'Bye']
console.log(greet1.join(', '))

let str = '120р.'
console.log(parseInt(str))

let str1 = '99€'
console.log(parseInt(str1))