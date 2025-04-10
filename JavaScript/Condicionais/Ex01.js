//01. Verificar se um número é positivo, negativo ou zero.


var prompt = require('prompt-sync')();

let num = Number(prompt("Digite um numero:"));

if(num > 1){
    console.log("O numero eh positivo!")
}else if (num < 0){
    console.log("O numero eh negativo!")
}else{
    console.log("O numero eh igual a zero!")
}