// Very simple, given a number (integer / decimal / both depending 
// on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  //your code here
  return (number > 0)?  -Math.abs(number): Math.abs(number);
  
}