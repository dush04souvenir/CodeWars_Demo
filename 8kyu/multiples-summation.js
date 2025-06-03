// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 
// below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  // Return 0 for negative numbers
  if (number < 0) {
    return 0;
  }
  
  let sum = 0;
  
  // Iterate through all numbers below the given number
  for (let i = 1; i < number; i++) {
    // Check if the number is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
}

//best practice solution
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}