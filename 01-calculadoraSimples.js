/*
01)​ Crie uma função que dado dois valores
 (passados como parâmetros) 
 mostre no console a soma,
  subtração,
  multiplicação 
  e divisão desses valores.

*/

function calculadora(numero1, numero2) {
	console.log(`
  Soma: ${numero1 + numero2},
  Subtração: ${numero1 - numero2},
  Multiplicação: ${numero1 * numero2},
  Divisão: ${numero1 / numero2}`);
}
calculadora(2, 5);
