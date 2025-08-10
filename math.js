// math.js

/**
 * Calcula el factorial de un número.
 * @param {number} n - El número para calcular el factorial.
 * @returns {number} El factorial de n.
 */
function factorial(n) {
  if (n < 0) {
    return NaN; // O puedes lanzar un error, como prefieras.
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Calcula el n-ésimo número en la secuencia de Fibonacci.
 * @param {number} n - La posición en la secuencia de Fibonacci.
 * @returns {number} El número de Fibonacci en la posición n.
 */
function fibonacci(n) {
  if (n < 0) {
    return NaN;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = {
  factorial,
  fibonacci,
};