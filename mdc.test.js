const { calcularMDC } = require("./mdc");

describe("Testa MDC de números", () => {
  test("MDC de 8 e 12 deve ser 4 ", () => {
    expect(calcularMDC(8, 12)).toBe(4);
  });
});
