/*
07) ​ Uma das vantagens da programação é 
a automatização de tarefas que não gostamos de realizar.
Dito isto,elabore uma função 
cujo objetivo é resolver a fórmula de Bhaskara.
Para isso, sua função deve receber três parâmetros,
 
 “ax2”, “bx” e “c”, 
 de tal modo que na equação:
 3x2 - 5x + 12 os valores seriam respectivamente:
 3,-5, 12. 

 Como retorno deve ser passado um vetor que tem 2 valores
um para cada possível resultado, mesmo que os 
resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do 
vetor, um string com a frase:
“Delta é negativo”.

*/

function FormulaDeBhaskara(a, b, c) {
	let resultados = [];
	let delta = b ** 2 - 4 * a * c;
	if (delta < 0) {
		return 'Delta é negativo';
	} else {
		let xMais = (-b + Math.sqrt(delta)) / (2 * a);
		let xMenos = (-b - Math.sqrt(delta)) / (2 * a);

		resultados.push(xMais);
		resultados.push(xMenos);
		return `Os resultados da equação x² + ${b}x ${c} são [ ${resultados} ]`;
	}
}

console.log(FormulaDeBhaskara(2, -16, -14));
