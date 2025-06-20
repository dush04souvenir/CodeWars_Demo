// here was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!
function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((a,b) => a + b,0) / classPoints.length;
  return average < yourPoints;
}
// best practice solution
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
}