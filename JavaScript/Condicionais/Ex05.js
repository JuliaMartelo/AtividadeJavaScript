//05. Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();


let nota = Number(prompt("Olá, digite sua nota:"));

if(nota >= 5){
    console.log("Voce foi aprovado!")
}else{
    console.log("Voce foi reprovado!")
}