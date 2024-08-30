const colunas = document.querySelectorAll(".coluna_cards")

const cards = document.querySelectorAll(".card")

let CardArrastado; 

const dragStart = (event) =>{
    CardArrastado = event.target
    event.dataTransfer.effectAllowed = "move"
}

const dragOver = (event) =>{
    event.preventDefault()
}

const dragEnter = ({target}) =>{
    if(target.classList.contains("coluna_cards")){
        target.classList.add("coluna_card_movendo")
    }
}

const dragLeave = ({target}) =>{
        target.classList.remove("coluna_card_movendo")
}

cards.forEach((card) =>{
    card.addEventListener("dragstart", dragStart)
})

colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", dragOver)
    coluna.addEventListener("dragenter", dragEnter)
    coluna.addEventListener("dragleave", dragLeave)
})