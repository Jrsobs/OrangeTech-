console.log('')
console.log('Função Escreva meu nome')
console.log('')
function escrevaMeuNome(nome,sobrenome){
  console.log('Meu nome é '+nome)
}

escrevaMeuNome('Júnior Sobreira')
escrevaMeuNome('Francisco Sobreira')

console.log('')
console.log('Função Ver Maioridade')
console.log('')

function verMaioridade(idade){
  if(idade < 18){
    console.log('Menor de idade')
  } else {
    console.log('Maior de idade')
  }
}

verMaioridade(15)
verMaioridade(34)
console.log('')

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const a = 'Débito'; 
const b = 'Dinheiro ou Pix';
const c = 'Crédito até 2x';
const d = 'Crédito acima de 2x';


function aplicarDescontoOuJuros(valor,formaDePagamento) {
  if (formaDePagamento == a) {
    return valor - (valor*10/100);
  } else if (formaDePagamento == b) {
    return valor - (valor*15/100);
  } else if (formaDePagamento == c) {
    return valor ;
  } else if (formaDePagamento == d) {
    return valor + (valor*10/100);
  }
}

let precoPadrao = 400
let formaDePagamento = b

console.log ('Função Aplicar Desconto ou Juros 1')
console.log('Valor à Pagar R$ '+aplicarDescontoOuJuros(precoPadrao,formaDePagamento).toFixed(2))


precoPadrao = 300
formaDePagamento = d

console.log('Valor à Pagar R$ '+aplicarDescontoOuJuros(precoPadrao,formaDePagamento).toFixed(2))
console.log('')

function aplicarDesconto(valor,formaDePagamento) {
  if (formaDePagamento == a) {
    return valor - (valor*0.1);
  } else if (formaDePagamento == b) {
    return valor - (valor*0.15);
  } else if (formaDePagamento == c) {
    return valor ;
  } else if (formaDePagamento == d) {
    return valor + (valor*0.1);
  }
}

console.log ('Função Aplicar Desconto ou Juros 2')
console.log('Valor à Pagar R$ '+aplicarDesconto(100,d).toFixed(2))
console.log('Valor à Pagar R$ '+aplicarDesconto(100,'Dinheiro ou Pix').toFixed(2))