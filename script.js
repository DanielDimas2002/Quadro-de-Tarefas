const colunas = document.querySelectorAll(".coluna_cards")

let CardArrastado; // Variável para armazenar o card que está sendo arrastado

// Função chamada quando o arrasto de um card começa
const dragStart = (event) => {
    CardArrastado = event.target // Armazena o card arrastado
    event.dataTransfer.effectAllowed = "move" // Define que o efeito permitido é mover o card
}

// Permite que o card seja solto em outra coluna
const dragOver = (event) => {
    event.preventDefault() // Previene o comportamento padrão para permitir o drop
}

// Adiciona a classe que indica que um card está sendo movido sobre a coluna
const dragEnter = ({ target }) => {
    if (target.classList.contains("coluna_cards")) {
        target.classList.add("coluna_card_movendo")
    }
}

// Remove a classe que indica que um card está sendo movido sobre a coluna
const dragLeave = ({ target }) => {
    target.classList.remove("coluna_card_movendo")
}

// Solta o card na nova coluna
const drop = ({ target }) => {
    if (target.classList.contains("coluna_cards")) {
        target.classList.remove("coluna_card_movendo") // Remove a classe de indicação
        target.append(CardArrastado) // Move o card arrastado para a nova coluna
    }
}

// Cria um novo card ao clicar duas vezes na coluna
const createCard = ({target}) =>{
    if (target.classList.contains("coluna_cards")) return // Verifica se o clique foi na coluna

    const card = document.createElement("section") // Cria um novo elemento de card

    card.className = "card" // Define a classe do card
    card.draggable = "true" // Torna o card arrastável
    card.contentEditable = "true" // Permite a edição do conteúdo do card

    // Finaliza a edição do card quando o foco sai do card
    card.addEventListener("focusout", () =>{
        card.contentEditable = "false" // Desativa a edição do card

        if(!card.textContent){ // Remove o card se estiver vazio
            card.remove()
        }
    })

    card.addEventListener("dragstart", dragStart) // Adiciona o evento de arrasto ao card

    target.append(card) // Adiciona o card à coluna

    card.focus() // Foca no card para iniciar a edição
}

// Adiciona os eventos de arrasto e criação de cards para cada coluna
colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", dragOver)
    coluna.addEventListener("dragenter", dragEnter)
    coluna.addEventListener("dragleave", dragLeave)
    coluna.addEventListener("drop", drop)
    coluna.addEventListener("dblclick", createCard)
})
