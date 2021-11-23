
const result=document.getElementById("result")

let filmes = ["Eternos", "Homem Aranha", "Thor", "Titanic", "De volta para o Futuro", "Matrix", "ET", "O poderoso Chefão", "As Branquelas", "Star Wars", "Jurassic Park", "George O Rei da Floresta", "Harry Potter"];

let desenhos = ["Os Simpsons", "Caverna do Dragão", "Tom e Jerry", "Bob Esponja", "Os Padrinhos Mágicos", ]

function sortear() {
    
    let filmesrandom = filmes[Math.floor(Math.random()*filmes.length)];
    result.innerText = filmesrandom;

}