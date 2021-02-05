// 7 kyu
// Isograms

function isIsogram(str){
    if (str.length == 0) {
      return true;
    }
    let strL = str.toLowerCase();
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
      if (charCount.hasOwnProperty(strL[i])) {
        return false;
      } else {
        charCount[strL[i]] = 1;
      } 
    }
    return true;
  }