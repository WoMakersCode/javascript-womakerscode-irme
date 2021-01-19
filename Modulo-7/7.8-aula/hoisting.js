/**
 * arquivo: hoisting.js
 * descrição: explicação de como podemos usar Hoisting em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 18/01/2021
 */

/* let animalEstimacao;

console.log(animalEstimacao);

animalEstimacao = 'Jake'; */

// ==> Exemplo 2:

function mostrarNome() {
    console.log('Oi! Tudo bem? Me chamo...: ' + nome);
};

let nome;

mostrarNome();

nome = 'Glaucia Lemos';



