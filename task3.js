function formatDate(date) {

    let now = new Date()
    let diff = now - date
    milsec = 1000
    let sec = 60
    let min = 60

    if (diff < milsec) {
        console.log('прямо сейчас')
        return 'прямо сейчас'
    } else if (diff < milsec*sec) {
        console.log(Math.round(diff/milsec))
        return Math.round(diff/milsec) + ' секунд назад'
    } else if (diff < milsec*sec*min) {
        console.log(Math.round(diff/(sec*milsec)))
        return Math.round(diff/(sec*milsec)) + ' минут назад'
    } else {      
        let result = date.toLocaleString('ru', date.getFullYear(), date.getMonth(), date.getMonth(), date.getHours(), date.getMinutes())
        let resultSpace = result.replace(',', '')
        let resultSlice = resultSpace.slice(0, 16)        // ручная тема, но не знаю, как это автоматизировать
        return resultSlice
    }
}

// let date = new Date(new Date - 1)
// let date = new Date(new Date - 30*1000)
// let date = new Date(new Date - 5*60*1000)
let date = new Date(new Date - 86400*4*1000)
console.log(formatDate(date))



