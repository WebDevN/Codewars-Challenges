// 6kyu
// Consecutive Count

function getConsectiveItems (items, key){
    let itemsString = items.toString(),
        inRow = RegExp(`${key}+`, 'g'), 
        arrayResult = itemsString.match(inRow);
        if (arrayResult === null) {
            return 0;
        }
    let max = arrayResult[0].length;
    for (let i = 1; i < arrayResult.length; i++) {
      if (max < arrayResult[i].length) {
          max = arrayResult[i].length;
      }
    }
    return max; 
}