// You are going to be given a non-empty string. Your job is to return 
// the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// // Examples: "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A
function getMiddle(s) {
  const len = s.length;
  const middle = Math.floor(len /2);
  return len % 2 === 0 
         ? s[middle -1] + s[middle] 
         : s[middle];
}

//best practice solution
function getMiddle(s) {
  const len = s.length;
  return s.slice((len - 1) / 2, len / 2 + 1);
}