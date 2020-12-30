/**
 * arquivo: switchCase.js
 * descrição: explicação de como podemos usar switch case em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 30/12/2020 -- quarta-feira
 */

// switch-case

let qualDataHoje = new Date();
	
switch(qualDataHoje.getDay()) {
	case 0:
		console.log("Hoje é Domingo.");
		break;
	case 1:
		console.log("Hoje é Segunda-feira.");
		break;
	case 2:
		console.log("Hoje é Terça-feira.");
		break;
	case 3:
		console.log("Hoje é Quarta-feira.");
		break;
	case 4:
		console.log("Hoje é Quinta-feira.");
		break;
	case 5:
		console.log("Hoje é Sexta-feira.");
		break;
	case 6:
		console.log("Hoje é Sábado.");
		break;      
	default:
		console.log("Nenhuma data relacionada foi encontrada!");
		break;
}
