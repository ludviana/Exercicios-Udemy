/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário
atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso
default que indique que o plano é inválido.
*/

const aumentoFuncionario = ( plano, salario ) => {
  switch( plano ){
    case 'A':
      return `O novo salário será de ${salario*1.10}`
      break
    case 'B':
      return `O novo salário será de ${salario*1.15}`
      break
    case 'C':
      return `O novo salário será de ${salario*1.20}`
      break
    default:
      return 'Plano invalido'
      break
  }
}

console.log(aumentoFuncionario( 'A',1000 ))
console.log(aumentoFuncionario( 'B',1000 ))
console.log(aumentoFuncionario( 'C',1000 ))
console.log(aumentoFuncionario( 'D',1000 ))
