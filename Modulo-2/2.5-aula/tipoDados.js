/**
 * arquivo: tipoDados.js
 * descrição: explicação de como podemos usar diferentes tipos de 
 * dados em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 25/12/2020
 */

// String

/* 'Olá' 
"Olá"
`Olá`*/

/* let nome = 'Glaucia Lemos';
let nomeMae = "Jurema Lemos";
let frase = `Eu me chamo ${nome} e o nome da minha mãe é ${nomeMae}`;

console.log(frase);*/

// Number

/* const numero1 = 4;
const numero2 = 3.99;
const numero3 = 3e5; // 3 * 10 5

console.log(numero1);
console.log(numero2);
console.log(numero3);*/

// BigInt
/* const valor1 = 907124547521545715454542454574541784514541n;

console.log(valor1); // typeof*/

//Boolean

/* let x = 5;
let y = 5;
let z = 6;

console.log((x == y)); // true
console.log((x == z)); // false*/

// Undefinied
/* let nome; // let nome = 'Glaucia Lemos';
console.log(nome);*/ 

// Null
/* const numero = null;
console.log(typeof numero);*/ 

// Symbol
/* const valor1 = Symbol('Glaucia');
const valor2 = Symbol('Glaucia');

console.log(valor1);
console.log(valor2);*/

// Object

const estudante = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 34,
    tipoCurso: 'JavaScript',
    valorCurso: 25.00,
    ativo: true
};

console.log(estudante.ativo);




