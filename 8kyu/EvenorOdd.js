// // Create a function that takes an integer as an argument 
// // and returns "Even" for even numbers or "Odd" for odd numbers.

// //my solution
// function evenOrOdd(number) {
//   if (number %2 === 0){
//      return 'Even';
//   }
//   else{
//      return 'Odd';
//   }
// }

// // best practice solution
// function evenOrOdd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }

console.log('hello world');
function reverseString(str) {
    return str.split('').reverse().join('');
}z
console.log(reverseString('souvenir'));