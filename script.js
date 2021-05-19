const btnBuyCard = document.querySelector('#buyCard')
const playerHand = document.querySelector('#mao')
const table = document.querySelector('#mesa')
const lastCard = document.querySelector('.carta_mesa')
let num = 0

//inicio do jogo
window.onload = () => {
    starterCard()
    createCard(7)
}

//comprar as cartas
btnBuyCard.addEventListener('click', () => createCard(1))

//jogar as cartas
playerHand.addEventListener('click', function(e){
    let newColor = e.target.classList[1]
    let oldColor = lastCard.classList[1]
    playerHand.removeChild(e.target)
    lastCard.classList.remove(oldColor)
    lastCard.classList.add(newColor)
    lastCard.innerHTML = e.target.innerHTML
    table.appendChild(lastCard)
})

//criar as cartas
function createCard(numbCards){
    for(let i = 0; i < numbCards; i++){
        let newCard = document.createElement('div')
        newCard.innerText = num
        newCard.classList.add('carta', colorSelector())
        playerHand.appendChild(newCard)
        num++
    }
}

//Sortear as cores
function colorSelector() {
    let randonColorGenerator = Math.floor(Math.random()*4)
    switch(randonColorGenerator){
        case 0:
            return 'azul'
        case 1:
            return 'vermelha'
        case 2:
            return 'verde'
        case 3:
            return 'amarelo'
    }
}

//criar carta da mesa
function starterCard() {
    lastCard.classList.add(colorSelector())
}