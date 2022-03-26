const getIntersectingRectangle = (areas) => {
  let newArea = [];
  for (let i = 0; i < areas.length; i++) {
    [areas[i]] = areas[i].map((r) => {
      return console.log(r[0]);
    });
  }

  // [r1, r2, r3] = [r1, r2, r3].map((r) => {
  //   return {
  //     x: [r.x1, r.x2].sort((a, b) => a - b),
  //     y: [r.y1, r.y2].sort((a, b) => a - b),
  //   };
  // });
  // const noIntersect =
  //   r2.x[0] > r1.x[1] ||
  //   r2.x[1] < r1.x[0] ||
  //   r2.y[0] > r1.y[1] ||
  //   r2.y[1] < r1.y[0] ||
  //   r3.x[0] > r2.x[1] ||
  //   r3.x[1] < r2.x[0] ||
  //   r3.y[0] > r2.y[1] ||
  //   r3.y[1] < r2.y[0] ||
  //   r3.x[0] > r1.x[1] ||
  //   r3.x[1] < r1.x[0] ||
  //   r3.y[0] > r1.y[1] ||
  //   r3.y[1] < r1.y[0];
  // console.log(noIntersect);
  // return console.log(
  //   noIntersect
  //     ? false
  //     : {
  //         x1: Math.max(r1.x[0], r2.x[0], r3.x[0]), // _[0] is the lesser,
  //         y1: Math.max(r1.y[0], r2.y[0], r3.y[0]), // _[1] is the greater
  //         x2: Math.min(r1.x[1], r2.x[1], r3.x[1]),
  //         y2: Math.min(r1.y[1], r2.y[1], r3.y[1]),
  //       }
  // );
};

/*  ↓  DEMO  ↓  */

const rectangle1 = { x1: 1, y1: 1, x2: 10, y2: 10 };
const rectangle2 = { x1: 3, y1: 5, x2: 18, y2: 8 };
const rectangle3 = { x1: 5, y1: 4, x2: 15, y2: 14 };

getIntersectingRectangle([
  [2, 4, 5, 9],
  [3, 7, 6, 15],
  [4, 2, 10, 11],
]);
