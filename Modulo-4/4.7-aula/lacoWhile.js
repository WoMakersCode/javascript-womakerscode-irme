/**
 * arquivo: lacoWhile.js
 * descrição: explicação de como podemos usar while e do-while em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 30/12/2020
 */

// while --> a condição será testada no início de cada iteração do loop

let numeroInicial = 1;

while (numeroInicial <= 10) {
    console.log('O número é...: ', numeroInicial);
    numeroInicial++;
} 

// do-while --> sempre será executado uma vez 

let numeroInicial = 1;

do {
    console.log('O número é...: ', numeroInicial);
    numeroInicial++;
} while (numeroInicial <= 10);
