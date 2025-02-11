const { somaMultiplos } = require("./multiplos");

describe("Teste de função - Soma de multiplos", () => {
  test("Retorna a soma correta de múltiplos de 5 ou 7 abaixo de 1000", () => {
    expect(somaMultiplos()).toBe(156361);
  });
});
