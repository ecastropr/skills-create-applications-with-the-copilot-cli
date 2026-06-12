const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
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

  describe('modulo', () => {
    test('returns the image example remainder for 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('returns the remainder for positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('returns zero when evenly divisible', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('throws when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
    });
  });

  describe('power', () => {
    test('raises 2 to 3 for the image example', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('raises a base to the given exponent', () => {
      expect(power(3, 4)).toBe(81);
    });

    test('supports a zero exponent', () => {
      expect(power(9, 0)).toBe(1);
    });

    test('supports negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
    });
  });

  describe('square root', () => {
    test('returns the image example square root for 16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('returns the square root for a perfect square', () => {
      expect(squareRoot(81)).toBe(9);
    });

    test('returns the square root for zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('throws for negative numbers', () => {
      expect(() => squareRoot(-9)).toThrow('Square root of a negative number is not allowed.');
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

    test('routes to modulo', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('routes to power', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('routes to square root', () => {
      expect(calculate(16, 'sqrt')).toBe(4);
    });

    test('throws for an unsupported operation', () => {
      expect(() => calculate(1, '&', 2)).toThrow('Unsupported operation: &');
    });
  });
});
