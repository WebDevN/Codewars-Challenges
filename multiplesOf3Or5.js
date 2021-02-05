// 6 kyu
// Muliples of 3 or 5

function solution(number){
    if (number <= 0) {
      return 0;
    } else {
      const allBelow = new Array(number - 1);
      for (let i = 0; i < allBelow.length; i++) {
        allBelow[i] = i + 1;
      }
      const multOfThreeOrFive = allBelow.filter(num => (num % 3 === 0 || num % 5 === 0));
      return multOfThreeOrFive.reduce((sum, num) => sum + num, 0);
    } 
  }