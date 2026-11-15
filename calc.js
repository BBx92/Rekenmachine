function bereken(a, operator, b) {
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