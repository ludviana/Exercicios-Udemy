/*
04)​Crie uma função que irá receber dois valores,
 o dividendo e o divisor.
  A função deverá imprimir o resultadoe
   o resto da divisão destes dois valores.
*/

function divisao(divisor, dividendo) {
	let resultado = divisor / dividendo;
	let resto = divisor % dividendo;

	console.log(`resultado: ${resultado} resto: ${resto}`);
}

divisao(3, 3);
