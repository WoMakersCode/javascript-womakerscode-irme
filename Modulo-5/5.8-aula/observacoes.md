# Observações da Aula 5.8

Ao explicar o exercício das idades no finalzinho da aula e rodar o js, a professora se confunde e diz que o findIndex() tem que retornar o número 2, porque temos 2 pessoas acima de 18 anos na array em questão. Porém, conforme ela mesma explica ao apresentar o findIndex(), esta função retorna o primeiro índice que passa no teste, e não a quantidade de itens que passam no teste. Como no exercício o item que passa no teste está na posição 2, acaba coincidindo com a quantidade de itens que passam no teste. Segue abaixo o código da aula para melhor visualização:

const idades = [3, 10, 18, 20];

const maiorIdade = 18;

const ehAdulto = idades.findIndex(idade => idade >= maiorIdade);

console.log(ehAdulto);

