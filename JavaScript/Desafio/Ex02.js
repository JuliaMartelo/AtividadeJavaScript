//2. Crie um array de objetos com produtos e preços. Exiba no console o
//nome e o preço com R$ formatado.

let produtos = [
    {produto: "Caneta", preco: 2.50},
    {produto: "Lapis", preco: 1.00},
    {produto: "Borracha", preco: 0.50}
];

let valores = produtos.map(produtos => produtos.produto+ ", R$ " +produtos.preco);

console.log(valores);
