function diagonalDifference(arr) {
  console.log(arr.length);

  // Write your code here
  let d1 = 0;
  let d2 = 0;
  for (let row = 0; row < arr.length; row++) {
    d1 += arr[row][row];
    d2 += arr[row][arr.length - row - 1];
  }

  return console.log(Math.abs(d1 - d2));
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

diagonalDifference([
  [11, 2, 4, 9],
  [4, 5, 6, 1],
  [10, 8, -12, 5],
  [7, 5, -3, 9],
]);
