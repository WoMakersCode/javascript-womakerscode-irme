/**
 * arquivo: iteracaoObjetos.js
 * descrição: explicação de como podemos usar Interações de Objetos
 *  em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 18/01/2021
 */

// ==> For... in

/* funcionario = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    profissao: 'Cloud Advocate',
    idade: 34,
    empresa: 'Microsoft',
    ativa: true
};

for (let listarFuncionario in funcionario) {
    console.log(funcionario[listarFuncionario]);
}
 */

// ==> If... in

funcionario = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    profissao: 'Cloud Advocate',
    idade: 34,
    empresa: 'Microsoft',
    ativa: true
};

if ('profissao' in funcionario) {
    console.log('A key profissão existe no objeto Funcionario');
}