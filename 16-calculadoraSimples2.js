/*
16)​ Utilizando a estrutura do Switch faça um programa
que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string
referente à operação e a realize com os valoresnuméricos
na ordem que foram inseridos.
Por exemplo: calculadora (2, ‘+’, 3).
A função efetuará a soma de 2 e 3.
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
Crie um caso default para operações inválidas.
*/


function calculadoraSimples2(numero1, operador, numero2){
  switch( operador ){
    case '+':
      return `${numero1} + ${numero2} = ${numero1 + numero2}`
      break
    case '-':
      return `${numero1} - ${numero2} = ${numero1 - numero2}`
      break
    case '*':
      return `${numero1} x ${numero2} = ${numero1 * numero2}`
      break
    case '/':
      return `${numero1}  ${numero2} = ${numero1 / numero2}`
      break 
    default:
      return 'Operação Invalida'
  }
}

console.log(calculadoraSimples2( 2,'+',2 ))
console.log(calculadoraSimples2( 5,'+',2 ))
console.log(calculadoraSimples2( 10,'-',5 ))
console.log(calculadoraSimples2( 2,'-',5 ))
console.log(calculadoraSimples2( 2,'*',2 ))
console.log(calculadoraSimples2( 5,'*',2 ))
console.log(calculadoraSimples2( 3,'/',2 ))
console.log(calculadoraSimples2( 6,'/',2 ))

