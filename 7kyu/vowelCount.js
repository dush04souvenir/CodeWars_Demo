//function to count the number of vowels in a given string
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(char => vowels.includes(char)).length;
}
//test the function
console.log(getCount("aeiou")); // 5