#!/usr/bin/env node

/*
 * Supported operations:
 * + : addition
 * - : subtraction
 * * : multiplication
 * / : division
 * % : modulo
 * ^ : exponentiation (power)
 * sqrt : square root
 */

function add(left, right) {
  return left + right;
}

function subtract(left, right) {
  return left - right;
}

function multiply(left, right) {
  return left * right;
}

function divide(left, right) {
  if (right === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return left / right;
}

function modulo(left, right) {
  if (right === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }

  return left % right;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(value) {
  if (value < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }

  return Math.sqrt(value);
}

const operations = {
  '+': {
    name: 'addition',
    arity: 2,
    execute: add,
  },
  '-': {
    name: 'subtraction',
    arity: 2,
    execute: subtract,
  },
  '*': {
    name: 'multiplication',
    arity: 2,
    execute: multiply,
  },
  '/': {
    name: 'division',
    arity: 2,
    execute: divide,
  },
  '%': {
    name: 'modulo',
    arity: 2,
    execute: modulo,
  },
  '^': {
    name: 'power',
    arity: 2,
    execute: power,
  },
  sqrt: {
    name: 'square root',
    arity: 1,
    execute: squareRoot,
  },
};

function printUsage() {
  console.log('Usage: node src/calculator.js <number> <operation> <number>');
  console.log('Example: node src/calculator.js 8 + 2');
  console.log('Square root usage: node src/calculator.js <number> sqrt');
  console.log('Supported operations: +, -, *, /, %, ^, sqrt');
}

function parseNumber(value, label) {
  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`The ${label} value must be a valid number.`);
  }

  return parsedValue;
}

function calculate(left, operation, right) {
  const selectedOperation = operations[operation];

  if (!selectedOperation) {
    throw new Error(`Unsupported operation: ${operation}`);
  }

  if (selectedOperation.arity === 1) {
    return selectedOperation.execute(left);
  }

  return selectedOperation.execute(left, right);
}

function main() {
  const [leftInput, operation, rightInput] = process.argv.slice(2);
  const selectedOperation = operations[operation];

  if (!leftInput || !operation) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  if (!selectedOperation) {
    console.error(`Unsupported operation: ${operation}`);
    printUsage();
    process.exitCode = 1;
    return;
  }

  if (selectedOperation.arity === 2 && !rightInput) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  try {
    const left = parseNumber(leftInput, 'first');
    const right = selectedOperation.arity === 2 ? parseNumber(rightInput, 'second') : undefined;
    const result = calculate(left, operation, right);

    if (selectedOperation.arity === 1) {
      console.log(`${operation} ${left} = ${result}`);
      return;
    }

    console.log(`${left} ${operation} ${right} = ${result}`);
  } catch (error) {
    console.error(error.message);
    if (error.message.startsWith('Unsupported operation:')) {
      printUsage();
    }
    process.exitCode = 1;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
  parseNumber,
  operations,
};

if (require.main === module) {
  main();
}
