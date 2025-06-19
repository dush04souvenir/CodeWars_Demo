// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
1
function accum(s) {
  return s
  .split('')
  .map((char, index) =>
  char.toUpperCase() + char.toLowerCase().repeat(index))

  .join("-");
  }

console.log(accum("souvenir"));