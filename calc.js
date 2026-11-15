function bereken(a, operator, b) {
  if (operator === '/' && b === 0) {
    throw new Error('Delen door nul');
  }
  let uitkomst;
  switch (operator) {
    case '+': uitkomst = a + b; break;
    case '-': uitkomst = a - b; break;
    case '*': uitkomst = a * b; break;
    case '/': uitkomst = a / b; break;
    default: throw new Error('Onbekende operator: ' + operator);
  }
  return Math.round(uitkomst * 1e10) / 1e10;
}

// Maakt de functie ook beschikbaar voor tests in Node.
if (typeof module !== 'undefined') {
  module.exports = { bereken };
}