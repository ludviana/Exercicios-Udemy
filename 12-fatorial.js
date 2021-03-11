/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(numero) {
	if (numero <= 0) {
		return 'numero invalido';
	} else {
		let resposta = numero;
		for (let i = numero - 1; i > 1; i--) {
			resposta *= i;
		}
		return resposta;
	}
}

console.log(fatorial(7));
