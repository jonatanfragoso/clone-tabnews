const calculadora = require("../../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 4", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 0 + 0 deveria retornar 0", () => {
  const resultado = calculadora.somar(0, 0);
  expect(resultado).toBe(0);
});

test("somar 0 + 1 deveria retornar 1", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Error");
});
