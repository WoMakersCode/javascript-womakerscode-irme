/**
 * arquivo: arraysIsteracao1.js
 * descrição: explicação de como podemos usar Arrays em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 11/01/2021
 */

// ==> join();

let eletrodomesticos = [
    'Televisão', 
    'Geladeira', 
    'Fogão', 
    'Microondas'
];

console.log(eletrodomesticos.join(' - '));

// ==> slice();
 
let eletrodomesticos = [
    'Televisão', 
    'Geladeira', 
    'Fogão', 
    'Microondas'
];

console.log(eletrodomesticos.slice(1));

// ==> concat();

let array_1 = [1,2,3,4,5];
let array_2 = [6,7,8,9,10];

let conjuntoNumeros = array_1.concat(array_2);

console.log(conjuntoNumeros); 

// ==> length

let eletrodomesticos = [
    'Televisão', 
    'Geladeira', 
    'Fogão', 
    'Microondas'
];

console.log(eletrodomesticos.length);


// ==> indexOf();

let eletrodomesticos = [
    'Televisão', 
    'Geladeira', 
    'Fogão', 
    'Microondas'
];

let posicaoEletrodomestico = eletrodomesticos.indexOf('Microondas');
console.log(posicaoEletrodomestico);


// ==> lastIndexOf()
let eletrodomesticos = [
    'Televisão', 
    'Geladeira', 
    'Televisão', 
    'Microondas'
];

let posicaoEletrodomestico = eletrodomesticos.lastIndexOf('Televisão');
console.log(posicaoEletrodomestico);

