function formatDate(date) {
    let sec = 60
    let min = 60

    if (date.getTime() < 1000) {
        console.log('righth now')
    } else if (date.getTime() < 1000*sec) {
        console.log(n)
    } else if (date.getTime() < 1000*sec*min) {
        console.log(m)
    } else {
        console.log(date.getFullYear(), date.getMonth())
    }
}

let date = new Date(2022, 11, 1)
console.log(formatDate(date))