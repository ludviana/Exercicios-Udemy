/*
03)​ Crie uma função que recebe dois parâmetros,
base e expoente, 
e retorne a base elevada ao expoente
*/

function potencia(base, expoente) {
	let resultado = 1;
	for (let i = 0; i < expoente; i++) {
		resultado *= base;
	}
	console.log(resultado);
}

potencia(2, 5);
