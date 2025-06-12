
// // You received a whatsup message from an unknown number. Could it be from that girl/boy with a 
// // foreign accent you met yesterday evening?

// // Write a simple function to check if the string contains the word hallo in different languages.

// // These are the languages of the possible people you met the night before:

// // hello - english
// // ciao - italian
// // salut - french
// // hallo - german
// // hola - spanish
// // ahoj - czech republic
// // czesc - polish
// // Notes
// function validateHello(greetings) {
//   const languages = ['hello', 'ciao','salut', 'hallo', 'hola', 'ahoj','czesc'];
//   const greet = greetings.toLowerCase();
//   return languages.some(word => greet.includes(word));
// }
// //best practice solution
// function validateHello(greetings) {
//   return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
// }
const fruits = ["apple", "banana", "mango"];

const hasBanana = fruits.some(fruit => fruit === "banana");

console.log(hasBanana); // true
