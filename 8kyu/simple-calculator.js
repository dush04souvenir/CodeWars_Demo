
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
function basicOp(operation, value1, value2) {
  switch(operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      console.log('Invalid input');
      return NaN; 
  }
}
//good practice solution
function basicOp(op, a, b) {
  const ops = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b
  };

  return ops[op] ?? NaN;
}

console.log(basicOp('+', 3, 4)); // 7
console.log(basicOp('%', 3, 4)); // NaN (invalid operator)
