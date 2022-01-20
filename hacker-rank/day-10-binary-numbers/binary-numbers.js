function main(input) {
  const n = input.toString(2);
  const splits = n.split('0');
  console.log(
    splits
      .map(function (elem) {
        return elem.length;
      })
      .reduce(function (a, b) {
        if (a > b) return a;
        else return b;
      })
  );
}

main(13);
