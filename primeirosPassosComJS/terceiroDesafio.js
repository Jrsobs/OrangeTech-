
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

let peso = 80
let altura = 1.80;
const IMC = peso / (altura*altura);

console.log('');
console.log('Análise de IMC');
console.log('');
console.log('Seu peso é '+peso+' kilos e a sua altura é '+altura*100+' centímetros');
console.log('Seu índice de massa corpórea (IMC) é de '+IMC);
console.log('Seu estado corporal é:');

if (IMC < 18.5) {
  console.log('Abaixo do peso')
} else if (IMC >= 18.5 && IMC < 25) {
  console.log('Peso normal')
} else if (IMC >= 25 && IMC < 30) {
  console.log('Acima do peso')
} else if (IMC >= 30 && IMC <= 40) {
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

const precoPadrao = 10;
const debitoDesconto = 0.9;
const dinheiroOuPixDesconto = 0.85;
const acrescimoAcimaDe2X = 1.1;

//formaDePagamento='Debito';'Dinheiro';'Pix';'Crédito até 2x';'Crédito >2x'
const formaDePagamento = 'Crédito >2x';

console.log ('');
console.log ('Forma de Pagamento e Valor a Pagar');
console.log ('');
console.log ('Valor do Produto = R$ '+precoPadrao);
console.log ('Forma de Pagamento: '+formaDePagamento);
console.log ('');

if (formaDePagamento === 'Debito') {
  const precoAPagar = precoPadrao * debitoDesconto
  console.log('Você ganhou 10% de desconto!')
  console.log('Total a pagar: R$ '+precoAPagar)
} else if (formaDePagamento === 'Dinheiro') {
  const precoAPagar = precoPadrao * dinheiroOuPixDesconto
  console.log('Você ganhou 15% de desconto!')
  console.log('Total a pagar: R$ '+precoAPagar)
} else if (formaDePagamento === 'Pix') {
  const precoAPagar = precoPadrao * dinheiroOuPixDesconto
  console.log('Você ganhou 15% de desconto!')
  console.log('Total a pagar: R$ '+precoAPagar)
} else if (formaDePagamento === 'Crédito até 2x') {
  console.log('Parcele em até 2x sem juros!')
  console.log('Total a pagar: R$ '+precoPadrao)
} else if (formaDePagamento === 'Crédito >2x') {
  const precoAPagar = precoPadrao * acrescimoAcimaDe2X
  console.log('Compra com acréscimo')
  console.log('Total a pagar: R$ '+precoAPagar)
}
console.log ('')