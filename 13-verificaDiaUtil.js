/*
13) ​ Crie um programa que exibe se um dia é dia útil,
fim de semana ou dia inválido dado o número referente ao dia.
Considere que domingo é o dia 1 e sábado é o dia 7.
 Utilize a estrutura Switch.
*/

const verificaDiaUtil = (dia) => {
	switch (dia) {
		case 1:
			return 'Domingo';
			break;
		case 2:
			return 'Segunda-Feira';
			break;
		case 3:
			return 'Terça-Feira';
			break;
		case 4:
			return 'Quarta-Feira';
			break;
		case 5:
			return 'Quinta-Feira';
			break;
		case 6:
			return 'Sexta-Feira';
			break;
		case 7:
			return 'Sabado';
			break;
		default:
			return 'Data invalida';
			break;
	}
};

console.log(verificaDiaUtil(6));
