// // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// // Example
// // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// //my solution
// function createPhoneNumber(numbers){
//   if(numbers.length !==10){
//     return 'invalid number of digits, you must enter 10 digits';
//   }
//   else{
//     const codearea = numbers.slice(0,3).join('');
//     const firstpart =numbers.slice(3,6).join('');
//     const lastpart = numbers.slice(6).join('');
    
//       return `(${codearea}) ${firstpart}-${lastpart}`;
    
//   }
//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
  
// }
// // best practice solution
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }
const input = [1, -2, 3, -4, 5];

const result = input.reduce(
  (acc, val) => {
    if (val > 0) acc[0]++;       // count positives
    else if (val < 0) acc[1] += val; // sum negatives
    return acc;
  },
  [0, 0] // initial value: [count, sum]
);

console.log(result); // [3, -6]
