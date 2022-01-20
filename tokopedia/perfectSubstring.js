function perfectSubstring(s, k) {
    var charArr = s.split('');
    var listPoss = [];
    var count = 0;

    var i = 1;
    while (i <= s.length) {
      let tempItem;
      for (var j = 0; j < charArr.length - i + 1; j++) {
        tempItem = charArr.slice(j, j + i);
        if (tempItem.length % k === 0) {
          listPoss.push(tempItem);
        }
      }
      i++;
    }

    var mapList = [];
    var obj;
    listPoss.forEach((el) => {
      obj = {};
      el.forEach((item) => {
        if (obj[item] === undefined || obj[item] === null) {
          obj[item] = 1;
        } else {
          obj[item] = obj[item] + 1;
        }
      });

      mapList.push(obj);
    });

    mapList.forEach((ob) => {
      var valid = true;
      Object.keys(ob).forEach((key) => {
        if (ob[key] !== k) {
          valid = false;
        }
      });

      if (valid) count++;
    });

    return count;
}

console.log(perfectSubstring('1020122', 2));
