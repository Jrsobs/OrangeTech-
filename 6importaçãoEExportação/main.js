
const {gets,print} = require("./funcoesauxiliares");

const qtd=gets();

let maiorValorEncontrado = 0;

for (let index = 0; index < 5; index++) {
    const numero = gets();
    if (numero > maiorValorEncontrado){
    maiorValorEncontrado = numero;        
}
};

print(maiorValorEncontrado);