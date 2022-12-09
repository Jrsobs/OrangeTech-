// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da Gasolina;
// 3 - O tipo de Combustível que está no seu carro,
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor gasto com essa viagem.

console.log("Olá");

const precoEtanol = 5.00;
const precoGasolina = 6.66;
const tipoCombustivel = 'Etanol';
const distanciaEmKM = 100


if (tipoCombustivel === 'Gasolina') {
  const kmPorLitro = 10
  const valorCombustivel = precoGasolina
  const litrosConsumidos = distanciaEmKM / kmPorLitro;
  const valorGasto = litrosConsumidos * valorCombustivel;
  
  console.log('Você Gastou R$ '+valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Etanol') {
  const kmPorLitro = 8
  const valorCombustivel = precoEtanol
  const litrosConsumidos = distanciaEmKM / kmPorLitro;
  const valorGasto = litrosConsumidos * valorCombustivel;
  
  console.log('Você Gastou R$ '+valorGasto.toFixed(2));
};

