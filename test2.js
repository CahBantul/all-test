const waktuShift = (jam) => {
  // const pagi = jam[8, 9, 13];
  // const sore = jam[16, 17, 20];
  // const malam = jam[3, 4];

  // const shift = ['pagi', 'sore', 'malam'];
  if (jam == (8 || 9 || 13)) {
    console.log(`pagi`);
  } else if (jam == (16 || 17 || 20)) {
    console.log(`sore`);
  } else if (jam == 3 || 4) {
    console.log(`malam`);
  }
};

waktuShift(8);
waktuShift(16);
waktuShift(4);
