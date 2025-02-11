const { encontrarNumeromaior } = require("./array");

describe("Testes indice maior e indice menor", () => {
  test("Array padrão do exemplo", () => {
    const resultado = encontrarNumeromaior([8, 3, 5, 1, 9, 2]);
    expect(resultado).toEqual({
      indiceMaior: 4,
      indiceMenor: 3,
    });
  });
});
