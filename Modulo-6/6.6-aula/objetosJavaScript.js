/**
 * arquivo: objetosJavaScript.js
 * descrição: explicação de como podemos usar Objetos em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 18/01/2021
 */

// ==> Objetos
/* 
let pessoa = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 34,
    profissao: 'Cloud Advocate',
    empresa: 'Microsoft'
};

console.log(pessoa); */

// Brackets (Colchetes) vs Dot (ponto) notation

let pessoa = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 34,
    profissao: 'Cloud Advocate',
    empresa: 'Microsoft'
};

// let listarProfissao = pessoa.profissao;
let listarProfissao = pessoa['profissao'];
let idadeFuncionario = pessoa.idade;

console.log(idadeFuncionario);

