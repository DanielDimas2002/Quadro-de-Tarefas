const colunas = document.querySelectorAll(".coluna_cards")

let CardArrastado;

const dragStart = (event) => {
    CardArrastado = event.target
    event.dataTransfer.effectAllowed = "move"
}

const dragOver = (event) => {
    event.preventDefault()
}

const dragEnter = ({ target }) => {
    if (target.classList.contains("coluna_cards")) {
        target.classList.add("coluna_card_movendo")
    }
}

const dragLeave = ({ target }) => {
    target.classList.remove("coluna_card_movendo")
}

const drop = ({ target }) => {
    if (target.classList.contains("coluna_cards")) {
        target.classList.remove("coluna_card_movendo")
        target.append(CardArrastado)
    }
}

const createCard = ({target}) =>{
    if (target.classList.contains("coluna_cards")) return

    const card = document.createElement("section")

    card.className = "card"
    card.draggable = "true"
    card.contentEditable = "true"

    card.addEventListener("focusout", () =>{
        card.contentEditable = "false"

        if(!card.textContent){
            card.remove()
        }
    })

    card.addEventListener("dragstart", dragStart)

    target.append(card)

    card.focus()
}

colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", dragOver)
    coluna.addEventListener("dragenter", dragEnter)
    coluna.addEventListener("dragleave", dragLeave)
    coluna.addEventListener("drop", drop)
    coluna.addEventListener("dblclick", createCard)
})