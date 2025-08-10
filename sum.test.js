// sum.test.js

const suma = require('./sum');

test('Suma de 2 y 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Suma de números negativos', () => {
  expect(suma(-1, -1)).toBe(-2);
});

test('Suma de un número positivo y uno negativo', () => {
  expect(suma(-5, 5)).toBe(0);
});

test('Suma con cero', () => {
  expect(suma(10, 0)).toBe(10);
});