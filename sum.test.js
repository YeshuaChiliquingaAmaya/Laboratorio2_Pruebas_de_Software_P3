const suma = require('./sum');

test ('Suma de 2 y 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});