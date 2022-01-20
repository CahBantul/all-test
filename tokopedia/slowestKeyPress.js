function slowestKey(keyTimes) {
  // Write your code here
    const makeChar = (num) => String.fromCharCode(num + 97);
    const map = [];
    for (let i = 0; i < keyTimes.length; i++) {
      if (keyTimes[i - 1]) {
        map.push([keyTimes[i][0], keyTimes[i][1] - keyTimes[i - 1][1]]);
        console.log(`halo`);
        
      } else {
        map.push([keyTimes[i][0], keyTimes[i][1]]);
        console.log(`okok`);
        
      }
      map.sort((first, second) => second[1] - first[1]);
    }
    console.log(map);
    
    return makeChar(map[0][0]);
}

console.log(
  slowestKey([
    [1, 2],
    [2, 2],
    [0, 5],
  ])
);
