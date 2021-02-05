// 7 kyu
// Excessively Abundant Numbers

function abundantNumber(num) {
    let propDivs = [];
    for (let i = 0; i < num; i++) {
      if (i != num && num % i == 0) {
        propDivs.push(i);
      }
    }
    if (num < propDivs.reduce((sum, num) => sum + num)) {
        return true;
    } 
    return false;
  }