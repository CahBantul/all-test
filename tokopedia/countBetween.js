function countBetween(arr, low, high) {
  // Write your code here
  let between = [...low, ...high];
  between.sort((a, b) => a - b);
  let count = 0;

  arr.forEach((a) => {
    if (a >= between[0] && a <= between[between.length - 1]) {
      count++;
    }
  });
  return count;
}

console.log(countBetween([1, 3, 4, 6, 8], [2], [4]));
