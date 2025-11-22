const inputTarefa = document.getElementById("input_tarefa")
const botão = document.getElementById ("adicionar_tarefa")
const lista = document.getElementById ("lista")

let arraytarefas = []

botão.addEventListener("click", adicionarTarefa)



function adicionarTarefa() {
    let tarefa = inputTarefa.value
    inputTarefa.value = ""
    if (arraytarefas.includes(tarefa)){
        alert("isso ja existe")
        return
    }
    arraytarefas.push(tarefa)
    let tarefaHTML = `
            <input type="checkbox" name="" class="finalizado">
            <p class="tarefa">${tarefa}</p>
            <i class="bi bi-pencil-square editar_tarefa"></i>
             <i class="bi bi-trash remover_tarefa"></i>
    `
    let itemLista = document.createElement("li")
    itemLista.innerHTML = tarefaHTML
    lista.appendChild(itemLista)

    let removerTarefa = document.getElementsByClassName("remover_tarefa")
    for(let i = 0 ; i < removerTarefa.length ; i++){
        removerTarefa[i].addEventListener("click", () => {
            removerTarefa[i].parentElement.remove()
            arraytarefas.slice(i, 1)
        })
    }
}
