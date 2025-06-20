// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) 4
// got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
  return games.reduce((total, game) => {
    const [x, y] = game.split(':').map(Number); // split and convert to numbers

    if (x > y) return total + 3;  // win
    if (x === y) return total + 1; // draw
    return total; // loss
  }, 0);
}