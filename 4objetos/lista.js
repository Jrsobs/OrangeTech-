class Pessoa{
  nome;
  peso;
  altura;

  constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  digaSeuIMC(){
    const imc = (this.peso / Math.pow(this.altura,2)).toFixed(2);
    return 'Me chamo '+this.nome+', peso '+this.peso+' Kg e tenho '+this.altura+' m de altura. Meu IMC é '+imc+'.'
  }
  classificarIMC(){
  const imc = this.digaSe
  if (imc < 18.5) {
  console.log('Estou Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
  console.log('Estou com Peso normal')
} else if (imc >= 25 && imc < 30) {
  console.log('Estou Acima do peso')
} else if (imc >= 30 && imc < 40) {
  console.log('Estou Obeso')
} else {
  console.log('Estou com Obesidade Grave')
};
console.log('');
  }
  }

const jose = new Pessoa('José',70,1.75)

console.log(jose.digaSeuIMC())
console.log(jose.classificarIMC())

const junior = new Pessoa('Júnior',96,1.80)
console.log(junior.digaSeuIMC())
console.log(junior.classificarIMC())

'erro'