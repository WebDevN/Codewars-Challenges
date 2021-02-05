// 7 kyu
// Square Every Digit

function squareDigits(num){
    return Number([...num.toString()].map(n => Number(n)).map(n => n ** 2).join(''));
  }