let valorCombustivel = 1.629;
let kmPercorridos = 140;
let valorAbastecido = 30.00;

const litrosAbastecidos = valorAbastecido / valorCombustivel;
const consumoMedioPorKm = kmPercorridos / litrosAbastecidos;
const kmPorL = litrosAbastecidos / kmPercorridos
const litrosAosCemKm = 100 / consumoMedioPorKm;
const valorPorKm = kmPorL * valorCombustivel

console.log('')
console.log('Olá! Bem vindo ao Consumo Médio!')
console.log('')
console.log('Com € '+valorAbastecido+", você Abasteceu "+litrosAbastecidos.toFixed(2)+' litros. Seu consumo médio é de '+consumoMedioPorKm.toFixed(2)+" Km/l ou "+litrosAosCemKm.toFixed(2)+" l/100Km , o mesmo que "+kmPorL.toFixed(2)+" l/Km, o que dá € "+valorPorKm.toFixed(4)+" por Km ou € "+valorPorKm.toFixed(4)*100+' a cada 100 km.');
console.log('')
console.log('Obrigado!')
console.log('')
