// Complete the square sum function so that it squares each number passed 
// into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 
function squareSum(numbers){
  let sum = 0;
  for(num of numbers){
    sum += num * num;
  }
  return sum;

}
//best practice solution
function squareSum(numbers){
  return numbers.reduce((sum, num) => sum + num * num, 0);
}