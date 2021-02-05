// 7 kyu
// Alphabet symmetry

function solve(arr){  
    let alphebet = [..."abcdefghijklmnopqrstuvwxyz"];
    return arr.map(str => {
      let counter = 0,
          strLetters = [...str.toLowerCase()];
      for (let i = 0; i < strLetters.length; i++) {
        if (strLetters[i] === alphebet[i]) {
          counter++;
        }  
      }
      return counter;
    })  
  }