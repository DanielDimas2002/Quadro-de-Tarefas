const colunas = document.querySelectorAll(".coluna_cards")

const cards = document.querySelectorAll(".card")

let draggedCard; 

const dragStart = (event) =>{
    draggedCard = event.target
    event.dataTransfer.effectAllowed = "move"
}

const dragOver = (event) =>{
    event.preventDefault()
}

cards.forEach((card) =>{
    card.addEventListener("dragstart", dragStart)
})

colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", dragOver)
    coluna.addEventListener("dragenter", dragOver)
})