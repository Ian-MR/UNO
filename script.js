const btnBuyCard = document.querySelector('#buyCard')
const playerHand = document.querySelector('#mao')
const table = document.querySelector('#mesa')
const lastCard = document.querySelector('.carta_mesa')
let amarelo = [0,1,2,3,4,5,6,7,8,9]
let azul = [0,1,2,3,4,5,6,7,8,9]
let verde = [0,1,2,3,4,5,6,7,8,9]
let vermelha = [0,1,2,3,4,5,6,7,8,9]

//inicio do jogo
window.onload = () => {
    starterCard()
    createCardOnHand(7)
}

//comprar as cartas
btnBuyCard.addEventListener('click', () => createCardOnHand(1))

//jogar as cartas
playerHand.addEventListener('click', function(e){
    let newColor = e.target
    let oldColor = lastCard
    if(canPlay(newColor, oldColor)){
        backToDeck(oldColor)
        playerHand.removeChild(e.target)
        lastCard.classList.remove(oldColor.classList[1])
        lastCard.classList.add(newColor.classList[1])
        lastCard.innerHTML = e.target.innerHTML
        table.appendChild(lastCard)
    }
})

//criar as cartas
function createCardOnHand(numbCards){
    for(let i = 0; i < numbCards; i++){
        let cardInfo = typeSelector()
        let newCardD = document.createElement('div')
        newCardD.innerHTML = "<p>"+cardInfo[0]+"</p>"
        newCardD.classList.add('carta', cardInfo[1])
        playerHand.appendChild(newCardD)
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

//esccolher o tipo da carta
function typeSelector(){
    let cor = colorSelector()
    let generatedCard
    let typeFunction
    let randonFunctionGenerator
    let totalCards = azul.length + amarelo.length + verde.length + vermelha.length
    if(totalCards != 0){
        switch(cor){
            case 'azul':
                if(azul.length != 0){
                    randonFunctionGenerator = Math.floor(Math.random()* azul.length)
                    typeFunction = azul[randonFunctionGenerator]
                    azul.splice(randonFunctionGenerator, 1)
                    generatedCard = [typeFunction,cor]
                }
                break
            case 'vermelha':
                if(vermelha.length != 0){
                     randonFunctionGenerator = Math.floor(Math.random()* vermelha.length)
                     typeFunction = vermelha[randonFunctionGenerator]
                     vermelha.splice(randonFunctionGenerator, 1)
                     generatedCard = [typeFunction,cor]
                 }
                 break
            case 'verde':
                if(verde.length != 0){
                    randonFunctionGenerator = Math.floor(Math.random()* verde.length)
                    typeFunction = verde[randonFunctionGenerator]
                    verde.splice(randonFunctionGenerator, 1)
                    generatedCard = [typeFunction,cor]
                }
                break
            case 'amarelo':
                if(amarelo.length != 0){
                    randonFunctionGenerator = Math.floor(Math.random()* amarelo.length)
                    typeFunction = amarelo[randonFunctionGenerator]
                    amarelo.splice(randonFunctionGenerator, 1)
                    generatedCard = [typeFunction,cor]
                }   
                break
        }
        if(generatedCard !== undefined) return generatedCard
        return typeSelector()

    }
}

//criar carta da mesa
function starterCard() {
    let starterCard = typeSelector()
    lastCard.classList.add(starterCard[1])
    lastCard.innerHTML = "<p>"+starterCard[0]+"</p>"
}

//verificar se pode jogar
function canPlay(newCard, oldCard){
    if(oldCard.classList[1] === newCard.classList[1]) return true
    if(oldCard.innerHTML === newCard.innerHTML) return true
    return console.log("falso")
}

//voltar para o baralho
function backToDeck(oldCard){
    let valor = oldCard.innerText
    let nome = oldCard.classList[1]
    switch(nome){
        case 'amarelo':
            amarelo.push(valor)
            amarelo.sort()
            break;
        case 'azul':
            azul.push(valor)
            azul.sort()
            break;
        case 'verde':
            verde.push(valor)
            verde.sort()
            break;
        case 'vermelha':
            vermelha.push(valor)
            vermelha.sort()
            break;
    }
}

//foi pra descobrir o erro
function teste(){
    console.log("Amarelo : "+amarelo)
    console.log("Verde   : "+verde)
    console.log("vermelha: "+vermelha)
    console.log("Azul    : "+azul)
}