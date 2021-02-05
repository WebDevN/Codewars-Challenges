// 6 kyu
// Counting Duplicates

function duplicateCount(text){
    if (text.length == 0 || text.length == 1) {
      return 0;
    }
    let textL = text.toLowerCase(),
        re = /([a-zA-Z0-9])(?=[a-zA-Z0-9]*\1)/g,
        dupChar = textL.match(re);
    if (!dupChar) {
      return 0;
    }
    let uniqueDupChar = [...new Set(dupChar)]
    return uniqueDupChar.length;
  }