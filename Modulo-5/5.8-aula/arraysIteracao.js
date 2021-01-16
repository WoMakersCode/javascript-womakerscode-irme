/**
 * arquivo: arraysInteracao2.js
 * descrição: explicação de como podemos usar Arrays em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 13/01/2021
 */

// ==> forEach()

/* let eletrodomesticos = [
    'Televisão', 
    'Geladeira', 
    'Fogão', 
    'Microondas'
];

eletrodomesticos.forEach((listaEletrodomesticos) => {
    console.log(listaEletrodomesticos);
});
 */

// ==> map()

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
];

const precoProdutos = eletrodomesticos.map((item) => {
    return item.preco;
});

console.log(precoProdutos);
 */

// ==> filter()

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
];

const comprarEletronicos = eletrodomesticos.filter(eletrodomestico => eletrodomestico.preco >= 1000);
console.log(comprarEletronicos); */


// ==> reduce()

/* let reais = [27.86, 71.95, 36.5];

let somarValores = reais.reduce((total, valor) => {
    return total + valor;
});

console.log(somarValores); */

// ==> every()

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
];

const produtoBarato = 500;
const promocaoEletro = eletrodomesticos.every(eletronico => eletronico.preco >= produtoBarato);
console.log(promocaoEletro); */

// ==> some()

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
];

const produtoCaro = 1000;

const eletricoCaro = eletrodomesticos.some(eletronico => eletronico.preco >= produtoCaro);

console.log(eletricoCaro); */

// ==> find()

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500, setor: 'Sala' },
    { eletronico: 'Geladeira', preco: 2500, setor: 'Cozinha' },
    { eletronico: 'Fogão', preco: 850, setor: 'Cozinha' },
    { eletronico: 'Microondas', preco: 300, setor: 'Cozinha' },
];

const produtosCozinha = eletrodomesticos.find(eletronico => eletronico.setor === 'Cozinha');
console.log(produtosCozinha);
 */

// ==> findIndex()

const idades = [3, 10, 18, 20];

const maiorIdade = 18;

const ehAdulto = idades.findIndex(idade => idade >= maiorIdade);

console.log(ehAdulto);

