/**
 * arquivo: parametrosEscopos.js
 * descrição: explicação de como podemos usar Parâmetros e Escopos
 * em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 18/01/2021
 */

// ==> Function -> Parâmetros

/* function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

let resultadoFinal = adicionarNumeros(5,5);
console.log(resultadoFinal); */

// ==> Escopo Global

let localNascimento = 'Rio de Janeiro';

function mostrarLocalNascimento() {
    let localOndeMorei = 'Buenos Aires';
};

console.log(localNascimento);

mostrarLocalNascimento();

