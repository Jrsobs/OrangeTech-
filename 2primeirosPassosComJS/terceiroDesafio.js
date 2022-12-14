
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 5;
const nota3 = 6;

const media = (nota1+nota2+nota3) / 3;
console.log('')
console.log('Média e Situação')
console.log('')
console.log('Sua média é '+media);
if (media < 5) {
  console.log('Reprovado!')
} else if (media >= 5 && media <= 7) {
  console.log('Recuperação!')
} else {
  console.log('Aprovado!')
}
console.log('')
/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const peso = 80
const altura = 1.80;
const imc = peso / Math.pow(altura, 2);

console.log('');
console.log('Análise de IMC');
console.log('');
console.log('Seu peso é '+peso+' kilos e a sua altura é '+altura*100+' centímetros');
console.log('Seu índice de massa corpórea (IMC) é de '+imc.toFixed(1));
console.log('Seu estado corporal é:');

if (imc < 18.5) {
  console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal')
} else if (imc >= 25 && imc < 30) {
  console.log('Acima do peso')
} else if (imc >= 30 && imc < 40) {
  console.log('Obeso')
} else {
  console.log('Obesidade Grave')
};
console.log('');

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoPadrao = 543;
const debitoDesconto = 0.9;
const dinheiroOuPixDesconto = 0.85;
const acrescimoAcimaDe2X = 1.1;
const a = 'Débito'
const b = 'Dinheiro'
const c = 'Pix'
const d = 'Crédito até 2x'
const e = 'Crédito acima de 2x'


//formaDePagamento='Debito';'Dinheiro';'Pix';'Crédito até 2x';'Crédito >2x'
const formaDePagamento = e;

console.log ('');
console.log ('Forma de Pagamento e Valor a Pagar');
console.log ('');
console.log ('Valor do Produto = R$ '+precoPadrao);
console.log ('Forma de Pagamento: '+formaDePagamento);
console.log ('');

if (formaDePagamento === a) {
  const precoAPagar = precoPadrao * debitoDesconto
  console.log('Você ganhou 10% de desconto!')
  console.log('Total a pagar: R$ '+precoAPagar.toFixed(2))
} else if (formaDePagamento === b) {
  const precoAPagar = precoPadrao * dinheiroOuPixDesconto
  console.log('Você ganhou 15% de desconto!')
  console.log('Total a pagar: R$ '+precoAPagar.toFixed(2))
} else if (formaDePagamento === c) {
  const precoAPagar = precoPadrao * dinheiroOuPixDesconto
  console.log('Você ganhou 15% de desconto!')
  console.log('Total a pagar: R$ '+precoAPagar.toFixed(2))
} else if (formaDePagamento === d) {
  console.log('Parcele em até 2x sem juros!')
  console.log('Total a pagar: R$ '+precoPadrao.toFixed(2))
} else if (formaDePagamento === e) {
  const precoAPagar = precoPadrao * acrescimoAcimaDe2X
  console.log('Compra com acréscimo')
  console.log('Total a pagar: R$ '+precoAPagar.toFixed(2))
}
console.log ('')