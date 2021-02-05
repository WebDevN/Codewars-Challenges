// 6 kyu
// zipWith

function zipWith(fn,a0,a1) {
    let arr = [];
    if (a0.length < a1.length) {
      let arr = [];
      for (let i = 0; i < a0.length; i++) {
        arr.push(fn(a0[i], a1[i]));
      }
      return arr;
    } else {
      for (let i = 0; i < a1.length; i++) {
        arr.push(fn(a0[i], a1[i]));
      }
      return arr;
    }
  }