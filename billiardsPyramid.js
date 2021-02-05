// 7 kyu
// Billiards pyramid

function pyramid(balls) {
    let i = 1;
    function adctorial(n){
        //base case
        if(n == 0 || n == 1){
            return 1;
        //recursive case
        }else{
            return n + adctorial(n-1);
        }
    }
    while (adctorial(i) <= balls) {
      i++
    }
    return i - 1;
  }