/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

*/

console.log("Olá")

const valorCombustivel = 5.79
const kmPorLitro = 12
const distanciaEmKM = 1580

const litrosConsumidos = distanciaEmKM / kmPorLitro
const valorGasto = litrosConsumidos * valorCombustivel

console.log('Você Gastou R$ '+valorGasto.toFixed(2))