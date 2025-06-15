// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.
function findAverage(array) {
  // your code 
  if(array.length === 0){
    return 0;
  }
  else{
    return array.reduce((a,b) => a + b, 0) / array.length;
  }
  
  
}
// best practice solution
function findAverage(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}
//check if the array contain the value x
function contains(array, x) {
  return array.includes(x);
}