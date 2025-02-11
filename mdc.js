function calcularMDC(a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

console.log(calcularMDC(8, 12));

module.exports = { calcularMDC };
