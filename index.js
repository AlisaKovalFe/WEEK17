// let n = 'jjsljj'
// console.log(n.length)

// var x = 'I have many \'apple\' many phone'
// console.log(x)
// var pos = x.indexOf('have')
// var posLast = x.lastIndexOf('many')
// var posSearch = x.search('many')
// var posIncl = x.includes('have')
// console.log(pos)
// console.log(posLast)
// console.log(posSearch)
// console.log(posIncl)

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
// const personaName = 'настя'

// if (personaName == '') {
//     console.log('пустая строка')
// } else {
//     console.log(personaName[0].toLocaleUpperCase()  + personaName.slice(1))
// }

// const greet = 'Hi, Bye'
// console.log(greet.split(', '))

// const greet1 = ['Hi', 'Bye']
// console.log(greet1.join(', '))

// let str = '120р.'
// console.log(parseInt(str))

// let str1 = '99€'
// console.log(parseInt(str1))

// let date = new Date ('2017-01-26')
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getUTCHours())
// console.log(date.getTime())

// let today = new Date()
// today.setHours(0)
// console.log(+today)

// let start = Date.now()
// for (let i = 0; i < 100000; i++) {
//     let doS = i*i*i
// }

// let end = Date.now()
// console.log(`${end-start}`)

// let ms = new Date(Date.parse('2012-01-26'))
// console.log(ms);

// let date = new Date(2021, 0, 24, 22, 51)
// console.log(date);
// let n = new Date (89*3600*1000)
// console.log(n.getTime());

// function getLocalDay(date) {
//     let arr = [1, 2, 3, 4, 5, 6, 7]
//     return arr[date.getDay()]
// }


// let date = new Date(2013, 0, 3)
// console.log(getLocalDay(date))

// function getSecondsToday() {    
//     let start = new Date().setHours(0)
//     let end = new Date()

//     return (Math.round((end - start)/1000))    
// }

// console.log(getSecondsToday())

// function getSecondsToTomorrow() {
//     let now = new Date()
//     let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
//     console.log(tommorow)
//     let diff = Math.round((tommorow - now)/1000)
//     return diff
// }
// console.log(getSecondsToTomorrow())

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month)
//     let act = new Date(date.getFullYear(), date.getMonth())
//     act.setDate(0)

//     return act
// }

// console.log(getLastDayOfMonth(2019, 01))

function getDateAgo(date, n) {
    date = new Date()
    
    return date.getDate() - n
}


console.log(getDateAgo(20, 1))