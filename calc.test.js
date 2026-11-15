const test = require('node:test');
const assert = require('node:assert');
const { bereken } = require('./calc.js');

test('optellen', () => {
  assert.strictEqual(bereken(2, '+', 3), 5);
});

test('aftrekken', () => {
  assert.strictEqual(bereken(10, '-', 4), 6);
});

test('vermenigvuldigen', () => {
  assert.strictEqual(bereken(6, '*', 7), 42);
});

test('delen', () => {
  assert.strictEqual(bereken(9, '/', 3), 3);
});