/**
 * arquivo: condicional.js
 * descrição: explicação de como podemos usar if e if-else
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 30/12/2020
 */

// Condicional if 

/* let podeDirigir = 16;

if (podeDirigir >= 18) {
    console.log('Tem permissão para dirigir!');
} */

// Condicional if-else
/* let podeDirigir = 16;

if (podeDirigir >= 18) {
    console.log('Tem permissão para dirigir!');
} else {
    console.log('Você não tem permissão para dirigir!');
} */

// Condicional operador (ternario)
let idade = 16;
let podeDirigir = idade >= 18 
    ? console.log('Tem permissão para dirigir!') 
    : console.log('Você não tem permissão para dirigir');
