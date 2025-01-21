// 02

const fibonacci = (num) => {
  if (num === 0 || num === 1) return `${num} pertence à sequência de Fibonacci.`;

  let a = 0, b = 1;

  while (b < num) {
    [a, b] = [b, a + b];
  }

  return b === num
    ? `${num} pertence à sequência de Fibonacci.`
    : `${num} não pertence à sequência de Fibonacci.`;

}

console.log(fibonacci(8));
