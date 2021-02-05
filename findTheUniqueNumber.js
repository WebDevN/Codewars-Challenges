// 6 kyu
// Find the unique number

function findUniq(arr) {
    if (arr[0] === arr[1]) {
      return arr.find(element => element !== arr[0]);
    } else if (arr[1] === arr[2]) {
      return arr[0];
    } else {
      return arr[1];
    }
  }