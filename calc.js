function bereken(a, operator, b) {
  if (operator === '/' && b === 0) {
  throw new Error('Delen door nul');
  }
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: throw new Error('Onbekende operator: ' + operator);
  }
}

// Maakt de functie ook beschikbaar voor tests in Node.
if (typeof module !== 'undefined') {
  module.exports = { bereken };
}