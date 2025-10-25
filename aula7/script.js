// // let cores = [
// //     "blue",
// //     "red",
// //     "orange",
// //     "green",
// //     "yellow",
// //     "grey",
// //     "brown",
// //     "purple",
// //     "black",
// //     "pink",
// ]

let formas = [
    "retangulo",
    "circulo",
    "quadrado",
    "losango"
]


let divPrincipal = document.querySelector("#principal")
let pNome_Da_Forma = document.querySelector("#nome_da_cor")
let index = 0

pNome_Da_Forma.innerText = cores[index]

function proximo(){
    index += 1
    if (index > formas.length - 1){
        index = 0
    }
    // pNome_Da_Formas.innerText = formas[index]
    // divPrincipal.style.backgroundColor = formas[index]
    if (formas[index] == "retangulo") {
        divPrincipal.style.width = 400px
         divPrincipal.style.height = 200px
    } else if (formas[index] == "circulo") {
        
    }
}
function anterior(){
    index -= 1
    if (index < 0){
        index = formas.length - 1
    }
    pNome_Da_Forma.innerText = formas[index]
    divPrincipal.style.backgroundColor = formas[index]
}