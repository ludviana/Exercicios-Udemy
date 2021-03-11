/*
06)​ Elabore duas funções que recebem três parâmetros:
capital inicial, taxa de juros e tempo de aplicação.
Aprimeira função retornará o montante da aplicação financeira 
sob o regime de juros simples 
e a segundaretornará o valor da aplicação
sob o regime de juros compostos
*/

function jurosSimples(capital, taxa, tempo) {
	let juros = capital * (taxa / 100) * tempo;
	let montante = capital + juros;
	console.log(`Juros Simples: ${montante.toFixed(2)}`);
}
function jurosCompostos(capital, taxa, tempo) {
	taxa = 1 + taxa / 100;
	let novaTaxa = Math.pow(taxa, tempo);
	let montante = capital * novaTaxa;

	console.log(`Juros Compostos: ${montante.toFixed(2)}`);
}

jurosSimples(100, 10, 2);
jurosCompostos(100, 10, 2);
