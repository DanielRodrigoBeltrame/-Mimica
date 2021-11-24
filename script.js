
// apontamento para os elementos html do DOM que vou usar
const result=document.getElementById("result")


const filmes = ["Eternos", "Homem Aranha", "Thor", "Titanic", "De volta para o Futuro", "Matrix", "ET", "O poderoso Chefão", "As Branquelas", "Star Wars", "Jurassic Park", "George O Rei da Floresta", "Harry Potter"];

let filme = null

const desenhos = ["Os Simpsons", "Caverna do Dragão", "Tom e Jerry", "Bob Esponja", "Os Padrinhos Mágicos", ]

// alteradores de estado da aplicação
function sortear() {
    filme = filmes[Math.floor(Math.random()*filmes.length)];
    
    render()

}

// mostra o estado atual da aplicação na tela

function render(){
    result.innerText = filme

}
