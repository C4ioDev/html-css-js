let cores = [
    "blue",
    "red",
    "orange",
    "green",
    "yellow",
    "grey",
    "brown",
    "purple",
    "black",
    "pink",
]

let divPrincipal = document.querySelector("#principal")
let pNome_Da_Cor = document.querySelector("#nome_da_cor")
let index = 0

pNome_Da_Cor.innerText = cores[index]

function proximo(){
    index += 1
    if (index > cores.length - 1){
        index = 0
    }
    pNome_Da_Cor.innerText = cores[index]
    divPrincipal.style.backgroundColor = cores[index]

}
function anterior(){
    index -= 1
    if (index < 0){
        index = cores.length - 1
    }
    pNome_Da_Cor.innerText = cores[index]
    divPrincipal.style.backgroundColor = cores[index]
}