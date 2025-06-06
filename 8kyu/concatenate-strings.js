const words = ['Hello', 'world', '!'];

const sentence = words.reduce((acc, word) => acc + ' ' + word);

console.log(sentence); // Output: "Hello world !"
