//03. Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();


let num = (prompt("Olá, digite sua idade:"));

if(num % 2){
    console.log("O numero eh par!")
}else{
    console.log("O numero eh impar!")
}