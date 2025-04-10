
//Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();
let senha = 1234;
let resposta = prompt("Ola, digite a senha:")

if (senha =! resposta) 
{
    console.log("A senha esta correta")
}
else
{
    console.log("Senha inválida!")
}
