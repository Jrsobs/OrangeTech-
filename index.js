
const notas = [];

notas.push(5);
notas.push(10);
notas.push(7);
notas.push(10);

let soma = 0;

let media = 0

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

media = soma / notas.length;

console.log(soma);
console.log(notas);
console.log(notas.length);
console.log(media);
console.log('')

notas.pop();

soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

media = soma / notas.length;

console.log(soma);
console.log(notas);
console.log(notas.length);
console.log(media);