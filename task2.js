let button = document.querySelector('button')
let newText = document.querySelector('#newText')
let container = document.querySelector('#container')


commentsAll = []

function sendComment() {
    let commentAdd = ''
    for (let item of commentsAll) {
        commentAdd += `<div><div class="inner" type="text">${item}</div></div>`
        container.style.fontSize = '1rem'
        // container.insertAdjacentHTML('afterend', `<div class="inner">${item}</div>`) почему-то тут зазваивает/затраивает         
    }
    
    container.innerHTML = commentAdd
}


function newComment() {    
    let checkComment = newText.value.toLowerCase()

    function checkSpam() {
        console.group(checkComment)
        if (checkComment.includes('viagra')) {
            checkComment = newText.value.replace(/viagra/gi, '***')
            console.log(checkComment)
        }

        if (checkComment.includes('xxx')) {
            checkComment = newText.value.replace(/xxx/gi, '***')
            console.log(checkComment)
        }
        
    }   
    checkSpam()
    commentsAll.push(checkComment)
    sendComment() 
    console.log(commentsAll)
    newText.value = '' 
}




// button.addEventListener('click', sendComment)
button.addEventListener('click', newComment)

