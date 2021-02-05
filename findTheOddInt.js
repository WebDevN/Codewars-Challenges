// 6 kyu
// Find the odd int

function findOdd(A) {
    let intCountObj = {};
    for (let i = 0; i < A.length; i++) {
      if (intCountObj.hasOwnProperty(A[i].toString())) {
        intCountObj[A[i].toString()]++;
      } else {
        intCountObj[A[i].toString()] = 1;
      }
    }
    let intCountArr = Object.values(intCountObj);
    let value = intCountArr.find(n => n % 2 === 1);
    return Number(Object.keys(intCountObj).find(key => intCountObj[key] === value));
  }