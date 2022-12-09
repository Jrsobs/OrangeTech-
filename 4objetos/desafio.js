/* 

1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

console.log('Exercício Classe Carro')

class Carro{
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca,cor,kmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    const calculo = 1/kmPorLitro;
    this.gastoMedioPorKm = calculo.toFixed(2)
  };
  gastoPorPercurso(distanciaEmKm,valorCombustivel){
    const valorGasto = distanciaEmKm * this.gastoMedioPorKm * valorCombustivel
    return 'Para uma distância de '+distanciaEmKm+'Km, com o combustível custando R$ '+valorCombustivel+', seu gasto será de aproximadamente R$ '+valorGasto.toFixed(2)+'.'
    };
  };

const Marcel = new Carro('Opel','Azul',7.5);

console.log(Marcel);
console.log(Marcel.gastoPorPercurso(70,5));

const Palio = new Carro('Fiat','Preto',10);
console.log(Palio);
console.log(Palio.gastoPorPercurso(70,5));
console.log('')

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
console.log('Exercício Classe Pessoa')

class Pessoa{
  nome;
  peso;
  altura;
  
  constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.imc = this.calcularIMC();
  }

  calcularIMC(){
    return (this.peso / Math.pow(this.altura,2)).toFixed(2);
      };

  seApresente(){
    return 'Olá. Me chamo '+this.nome+', peso '+this.peso+' Kg e tenho '+this.altura+' m de altura. Meu IMC é '+this.imc+'.'
  }
  
  classificarIMC(){
  if (this.imc < 18.5) {
  return 'Estou Abaixo do peso'
} else if (this.imc >= 18.5 && this.imc < 25) {
  return 'Estou com Peso normal'
} else if (this.imc >= 25 && this.imc < 30) {
  return 'Estou Acima do peso'
} else if (this.imc >= 30 && this.imc < 40) {
  return 'Estou Obeso'
} else {
  return 'Estou com Obesidade Grave'
}
  }
  }

const jose = new Pessoa('José', 70, 1.75)

console.log(jose)
console.log(jose.seApresente())
console.log(jose.classificarIMC())

const junior = new Pessoa('Júnior',96,1.80)
console.log(junior)
console.log(junior.seApresente())
console.log(junior.classificarIMC())