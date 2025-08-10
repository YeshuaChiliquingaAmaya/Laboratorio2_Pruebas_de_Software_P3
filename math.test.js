// math.test.js

const { factorial, fibonacci } = require('./math');

// Pruebas para la función factorial
describe('factorial', () => {
  test('El factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('El factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('El factorial de un número negativo debe ser NaN', () => {
    expect(isNaN(factorial(-1))).toBe(true);
  });
});

// Pruebas para la función fibonacci
describe('fibonacci', () => {
  test('El 6to número de Fibonacci debe ser 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('El 1er número de Fibonacci debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('El 0-ésimo número de Fibonacci debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
});