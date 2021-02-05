// 7 kyu
// Credit Card Mask

function maskify(cc) {
    if (cc.length < 5) {
      return cc;
    }
    return '#'.repeat(cc.length - 4) + cc.slice(-4);
  }