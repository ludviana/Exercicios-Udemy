/*
08) ​ Pedro joga N jogos de basquete por temporada.
  Para saber como está ele está progredindo, ele mantém
  registro de todos os as pontuações feitas por jogo.
  Após cada jogo ele anota no novo valor e confere se o
  mesmo é maior ou menor que seu melhor e pior desempenho.
  Dada uma lista string = “pontuação1 pontuação2
  pontuação3 etc..”, escreva uma função que ao recebê-la irá 
  comparar os valores um a um e irá retornar um
  vetor com o número de vezes que ele bateu seu
  recorde de maior número de pontos e quando fez seu pior
  jogo. (Número do pior jogo).
*/

let stringPontuacoes = '10, 20, 20, 8, 25, 3, 50, 80, 1';

function verificaPontuacao(pontuacao) {
	const valores = pontuacao.split(', ');
	let PiorJogo = 0;
	let Records = 0;
	let menorPontuacao = Number(valores[0]);
	let maiorPontuacao = Number(valores[0]);

	for (var i = 0; i < valores.length; i++) {
		if (valores[i] > maiorPontuacao) {
			maiorPontuacao = Number(valores[i]);
			Records++;
		} else if (valores[i] <= menorPontuacao) {
			menorPontuacao = Number(valores[i]);
			PiorJogo = i + 1;
		}
	}
	return `O pior jogo foi o ${PiorJogo}° e você bateu seu record ${Records}x`;
}

console.log(verificaPontuacao(stringPontuacoes));
