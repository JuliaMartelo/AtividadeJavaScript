//06. Solicitar idade até uma válida (>= 0) (Use o do...While)

var prompt = require('prompt-sync')();
const senha = 1234;
let senhaDigitada = prompt('Digite a senha: ');

while(senha != senhaDigitada) {
    console.log('Senha incorreta, tente novamente.');
    senhaDigitada = prompt('Digite a senha: ');

}

console.log("Acesso permitido!")