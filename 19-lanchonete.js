/*
19) ​ O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido,
a quantidade e calcule o valor a ser pago por aquele lanche.
Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const quantoDevo = (codigo, quantidade) => {
	let preco = 0;
	switch (codigo) {
		case 100:
			preco = 3;
			return `${quantidade} ${
				quantidade > 1 ? 'Cachorro Quentes ficam' : 'Cachorro Quente fica'
			} R$ ${Number.parseFloat(preco * quantidade).toFixed(2)}`;
			break;
		case 200:
			preco = 4;
			return `${quantidade} ${
				quantidade > 1
					? 'Hambúrgueres Simples ficam'
					: 'Hambúrguer Simples fica'
			} R$ ${Number.parseFloat(preco * quantidade).toFixed(2)}`;
			break;
		case 300:
			preco = 5.5;
			return `${quantidade} ${
				quantidade > 1 ? 'Cheeseburgueres ficam' : 'Cheeseburguer fica'
			} R$ ${Number.parseFloat(preco * quantidade).toFixed(2)}`;
			break;
		case 400:
			preco = 7.5;
			return `${quantidade} ${
				quantidade > 1 ? 'Baurus ficam' : 'Bauru fica'
			} R$  ${Number.parseFloat(preco * quantidade).toFixed(2)}`;
			break;
		case 500:
			preco = 3.5;
			return `${quantidade} ${
				quantidade > 1 ? 'Refrigerantes ficam' : 'Refrigerante fica'
			} R$ ${Number.parseFloat(preco * quantidade).toFixed(2)}`;
			break;
		case 600:
			preco = 2.8;
			return `${quantidade} ${
				quantidade > 1 ? 'Sucos ficam' : 'Suco fica'
			} R$ ${Number.parseFloat(preco * quantidade).toFixed(2)}`;
			break;
		default:
			return 'Produto não existente';
			break;
	}
};

for (let i = 100; i <= 700; i += 100) {
	console.log(quantoDevo(i, 3));
}
