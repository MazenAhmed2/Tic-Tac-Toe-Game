let board = document.querySelector('.board')

for (let i = 0; i < 9; i++){
    div = document.createElement('div')
    div.classList.add('cell')
    board.appendChild(div)
}

[...board.children].forEach((cell) => {
    cell.onclick = function (){
        this.innerText = player.current
        player.toggle()
        this.classList.add('clicked')
        if (check(board)){
            // clear(board)
            popMessage()
            clear(board)
            addScore(player.next())
            player.current = 'X'
        }
    }
})

let player = {
    items : ['X', 'O'],
    current: 'X',
    toggle : function (){
        if (this.current == 'X'){
            this.current = 'O'
        } else {
            this.current = 'X'
        }
        return this.current
    },
    next : function (){
        return this.current == 'X' ? 'O' : 'X';
    }
}


function check(board){
    [one, two, three, four, five, six, seven, eight, nine] = board.children;
    if (one.innerText == two.innerText && 
        two.innerText == three.innerText && 
        one.innerText){
        return true
    }
    if (four.innerText == five.innerText && 
        five.innerText == six.innerText && 
        four.innerText){
        console.log(!four.innerText)

        return true
    }
    if (seven.innerText == eight.innerText && 
        eight.innerText == nine.innerText && 
        seven.innerText){
        return true
    }
    if (one.innerText == four.innerText && 
        four.innerText == seven.innerText && 
        one.innerText){
        return true
    }
    if (five.innerText == two.innerText && 
        two.innerText == eight.innerText && 
        five.innerText){
        return true
    }
    if (three.innerText == six.innerText && 
        six.innerText == nine.innerText && 
        three.innerText){
        return true
    }
    if (one.innerText == five.innerText && 
        five.innerText == nine.innerText && 
        one.innerText){
        return true
    }
    if (three.innerText == five.innerText && 
        five.innerText == seven.innerText && 
        three.innerText){
        return true
    }

    return false 
}

function assign(letter, cell){
    cell.innerText = letter;
}

function createWinMessage(winner){
    div = document.createElement('div')
    div.classList.add('pop-up-message')

    background = document.createElement('div')
    background.classList.add('background')

    text = document.createElement('div')
    text.innerText = `${winner == 'X' ? 'Player 1' : 'Player 2'} Wins`
    text.classList.add('text')
    div.appendChild(text)
    
    button = document.createElement('div')
    button.innerText = 'OK'
    button.classList.add('button')

    div.appendChild(button)

    document.body.appendChild(div)
    document.body.appendChild(background)
}

function popMessage(){
    div = document.querySelector('.pop-up-message')
    div.children[1].children[0].innerText = `${player.next() == 'X' ? 'Player 1':'Player 2'} Wins`;
    div.style.display = 'block';
    div.children[1].children[1].onclick = function(){
        this.parentElement.parentElement.style.display = 'none';
    }
}

function clear(board){
    [...board.children].forEach((cell) => {
        cell.innerText = ''
        cell.classList.remove('clicked')
    })
}

function addScore(player){
    if (player == 'X'){
        var span = document.querySelectorAll('.player')[0].children[1]
        span.innerText = +span.innerText + 1;
    } else {
        var span = document.querySelectorAll('.player')[1].children[1]
        span.innerText = +span.innerText + 1;
    }
}

document.querySelector('.score-div').onclick = () => {
    clear(board)

}


