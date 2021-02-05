// 7 kyu
// Highest and Lowest

function highAndLow(numbers){
    let strSplt = numbers.split(' '),
        numArr = strSplt.map(n => Number(n));
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
  }