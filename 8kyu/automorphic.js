// // A number is called Automorphic number if and only if its square ends in the same digits as
// //  the number itself.
// //  For example, 25 is an automorphic number because its square (625) ends with 25.

// // Task
// // Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", 
// // otherwise return "Not!!"

// function automorphic(n) {
//   const square = n * n;
//   console.log(`n: ${n}, square: ${square}`); // DEBUG: See what square is
//   const nString = n.toString();
//   const squareString = square.toString();
//   console.log(`Comparing if ${squareString} ends with ${nString}`); // DEBUG

//   if (squareString.endsWith(nString)) {
//     return "Automorphic";
//   }
//   return "Not!!";
// }

// console.log("Testing 5:", automorphic(5)); // should return "Automorphic"
// console.log("Testing 6:", automorphic(6)); // should return "Not!!"

// // best practice solution
// // function automorphic(n) {
// //     return String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";
// // }
// console.log("Testing 5:", automorphic(5)); // Automorphic
// console.log("Testing 6:", automorphic(6)); // Not!!

// function automorphic(n) {
//   const square = n * n;
//   const nStr = n.toString();
//   const squareStr = square.toString();

//   // Get the last digits of square that match length of n
//   const ending = squareStr.slice(-nStr.length);

//   if (ending === nStr) {
//     return "Automorphic";
//   }
//   return "Not!!";
// }
function automorphic(n) {
  const square = n * n;
  const nStr = n.toString();
  const squareStr = square.toString();

  // Get the last digits of square that match length of n
  const ending = squareStr.slice(-nStr.length);

  if (ending === nStr) {
    return "Automorphic";
  }
  return "Not!!";
}

console.log("Testing 5:", automorphic(5)); // Automorphic
console.log("Testing 6:", automorphic(6)); // Not!!


