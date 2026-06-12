#!/usr/bin/env node

/*
 * Supported operations:
 * + : addition
 * - : subtraction
 * * : multiplication
 * / : division
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

const operations = {
  '+': {
    name: 'addition',
    execute: add,
  },
  '-': {
    name: 'subtraction',
    execute: subtract,
  },
  '*': {
    name: 'multiplication',
    execute: multiply,
  },
  '/': {
    name: 'division',
    execute: divide,
  },
};

function printUsage() {
  console.log('Usage: node src/calculator.js <number> <operation> <number>');
  console.log('Example: node src/calculator.js 8 + 2');
  console.log('Supported operations: +, -, *, /');
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

  return selectedOperation.execute(left, right);
}

function main() {
  const [leftInput, operation, rightInput] = process.argv.slice(2);

  if (!leftInput || !operation || !rightInput) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  try {
    const left = parseNumber(leftInput, 'first');
    const right = parseNumber(rightInput, 'second');
    const result = calculate(left, operation, right);

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
  calculate,
  parseNumber,
  operations,
};

if (require.main === module) {
  main();
}
