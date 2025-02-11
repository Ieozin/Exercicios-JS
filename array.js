function encontrarNumeromaior(numeros) {
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

  return { indiceMaior, indiceMenor };
}

console.log(encontrarNumeromaior([8, 3, 5, 1, 9, 2]));

module.exports = { encontrarNumeromaior };
