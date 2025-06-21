// Check to see if a string has the same amount of 'x's and 'o's. The method must return 
// a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
function XO(str) {
    //code here
  str = str.toLowerCase();
  return (str.match(/x/g) || []).length === (str.match(/o/g) || []).length;
}

