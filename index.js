// Desafio Classificador de nível de Herói

// Objetivo: crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize 
// uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

// Saída: ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nome = "Maria"
let quantDeXP = 10001

if (quantDeXP <= 1000){
    console.log("O Herói de nome " + nome + " está no nível de Ferro")}
else if (quantDeXP >= 1001 && quantDeXP <= 2000){
    console.log("O Herói de nome " + nome + " está no nível de Bronze")}
else if (quantDeXP >= 2001 && quantDeXP <= 5000){
    console.log("O Herói de nome " + nome + " está no nível de Prata")}
else if (quantDeXP >= 5001 && quantDeXP <= 7000){
    console.log("O Herói de nome " + nome + " está no nível de Ouro")}
else if (quantDeXP >= 7001 && quantDeXP <= 8000){
    console.log("O Herói de nome " + nome + " está no nível de Platina")}
else if (quantDeXP >= 8001 && quantDeXP <= 9000){
    console.log("O Herói de nome " + nome + " está no nível de Ascendente")}
else if (quantDeXP >= 9001 && quantDeXP <= 10000){
    console.log("O Herói de nome " + nome + " está no nível de Imortal")}
else if (quantDeXP >= 10001){
    console.log("O Herói de nome " + nome + " está no nível de Radiante")
}