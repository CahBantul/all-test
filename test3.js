const convertToBinary = (x) => {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x !== 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin.toString();
};

const hitungNomorBit = (input) => {
  var line = input.split(',');

  const binar = convertToBinary(line[0]);

  let sum = 0;

  for (let i = 0; i < binar.length; i++) {
    if (binar[i] == line[1]) {
      sum++;
    } else {
      sum = 'null';
    }
  }
  return console.log(sum);
};

hitungNomorBit('13,2');
