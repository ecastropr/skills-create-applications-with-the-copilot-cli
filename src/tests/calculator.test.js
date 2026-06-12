const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require('../calculator');

describe('calculator operations', () => {
  describe('addition', () => {
    test('adds the image example values', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(add(-4, -6)).toBe(-10);
    });

    test('adds decimal numbers', () => {
      expect(add(2.5, 1.5)).toBe(4);
    });
  });

  describe('subtraction', () => {
    test('subtracts the image example values', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts to a negative result', () => {
      expect(subtract(3, 8)).toBe(-5);
    });

    test('subtracts decimal numbers', () => {
      expect(subtract(7.5, 2.25)).toBe(5.25);
    });
  });

  describe('multiplication', () => {
    test('multiplies the image example values', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('multiplies by zero', () => {
      expect(multiply(9, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
    });
  });

  describe('division', () => {
    test('divides the image example values', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('divides decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('throws when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
    });
  });

  describe('calculate', () => {
    test('routes to addition', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('routes to subtraction', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('routes to multiplication', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('routes to division', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('throws for an unsupported operation', () => {
      expect(() => calculate(1, '%', 2)).toThrow('Unsupported operation: %');
    });
  });
});
