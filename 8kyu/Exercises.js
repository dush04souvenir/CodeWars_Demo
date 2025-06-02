// // Prince Rurangwa
// // 2:57 PM
// // Create a method that takes as input a name, city, and state to welcome a person. 
// // Note that `name` will be an array consisting of one or more values that should 
// // be joined together with one space between each, and the length of the `name` array in test cases will vary.

// // Example:

// // ```
// // ['John', 'Smith'], 'Phoenix', 'Arizona'

// // ```

// // This example will return the string `Hello, John Smith! Welcome to Phoenix, Arizona!`
// function welcomePerson(name, city, state) {
//     const fullName = name.join(' ');
//     return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
// }
// console.log(welcomePerson(['souvenir',],'kigali', 'Rwanda'));


// Create a method that takes as input a name, city, and state to welcome a person. Note that `name` will be an array consisting of one or more values that should be joined together with one space between each, and the length of the `name` array in test cases will vary.

// Example:

```
['John', 'Smith'], 'Phoenix', 'Arizona'

```


// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any 
// numbers then you should return 0.

// ### **Examples**

// Input: `[1, 5.2, 4, 0, -1]`

// Output: `9.2`

// Input: `[]`

// Output: `0`

// Input: `[-2.398]`

// Output: `-2.398`

function sumArray(array) {
    if (array.length === 0) {
        return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

let array = [1, 5.2, 4, 0, -1];
console.log(sumArray(array));
