//.length() => tamanho

// let frutas = ["Maca", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabuticaba", "Roma", "Seriguela", "Embu", "Caqui", "Uva verde", "Uva roxa"];

// console.log(frutas.length);

// let numeros = [20,5,3]
// console.log(numeros.lenght);

//------------------------------------------------------------------------------

//.reverse() -> reverte o nosso array
// let numeros = [70,100,120,1000];

// numeros.reverse ();

// console.log (numeros);

//-------------------------------------------------------------------------------

// let nomes = ["Julia", "Emilly", "Yasmin", "Anna"];

//.push() ->  Adiciona no final do array

// nomes.push("Isadora");

//.unshift() -> Adiciona no inicio do array

// nomes.unshift("Fernanda");

//.pop() -> Remove no final do array

// nomes.pop();

// console.log(nomes);

//-------------------------------------------------------------------------------

// let nomesAnimais = ["Negao", "Cristal", "Kiara"];

//.includes() = Se existe no Array, se ele existe ele retornara true

// console.log(nomesAnimais.includes("Negao"));

//-------------------------------------------------------------------------------

// let valores =[30,10,50,20];

//Quero os valores que 30

// const maiores = valores.filter(num => num > 30);

// console.log(maiores);

//-------------------------------------------------------------------------------

//.map () -> Definicao = Metodo usado em arrays que permite transformar os elementos do array original em novos valores, 
//criando um novo array, sem modificar o original.

//Lista de nomes de alunos e notas

// let alunos = [
//     {nome: "Julia", nota: 10},
//     {nome: "Emilly", nota: 10},
//     {nome: "Anna", nota:10},
//     {nome: "Yasmin", nota: 10}
// ];

//lista de nomes

// let alunosNomes = alunos.map(alunos => alunos.nome);

// //Funcao:
// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// })

// let alunoNota = alunos.map(aluno => aluno.nota);

// console.log(alunoNomesDois);

//2. Criar um array com mensagens personalizadas
// let nomes = ["Julia", "Anna", "Yasmin"];

// //Ola Anna

// let mensagem = nomes.map(itemDoArrayNomes => `Ola, ${itemDoArrayNomes}`);

// console.log(mensagem);

//3.  Pegar apenas os primeiros caracteres de nomes

// let nomes = ["Anna", "Julia", "Yasmin"];

// let inicial = nomes.map (element => element[0]);
// console.log(inicial);

//4.  emails

let emails = [
    "kaue@gmail.com", "julia @ outlook.com"
];

let dominios = emails.map(element => element.split("@")[0]
);
console.log(dominios);
