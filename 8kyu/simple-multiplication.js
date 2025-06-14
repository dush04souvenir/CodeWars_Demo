// This kata is about multiplying a given number by eight if it is an even number and by nine 
// otherwise.

// Fundamentals

function simpleMultiplication(number) {
    // your code........
  return number %2 === 0 ? number * 8 : number * 9 
}

//best practice solution
function simpleMultiplication(number) {
    return number * (number % 2 === 0 ? 8 : 9);
}