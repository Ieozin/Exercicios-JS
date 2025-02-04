const numeros = [8, 3, 5, 1, 9, 2];

let indiceMaior = 0;
let indiceMenor = 0;

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[indiceMaior]) {
    indiceMaior = i;
  }
  if (numeros[i] < numeros[indiceMenor]) {
    indiceMenor = i;
  }
}

console.log("indice do maior valor:", indiceMaior);
console.log("indice do menor valor:", indiceMenor);
