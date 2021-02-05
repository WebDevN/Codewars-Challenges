// 6 kyu
// Upside down numbers

function solve(x, y) {
    let sum = 0;
    let iString, iDigitArray, isEachDigitFipable, isSixNineOK, isSymetric, sideLength;
    //examining each number in range
    for (let i = x; i < y; i++) {
      iString = i.toString();
      iDigitArray = [...iString].map(n => Number(n));
      isEachDigitFipable = false;
      isSixNineOK = true;
      isSymetric = true;
    //dealing with numbers with even number of digits
      if (iDigitArray.length % 2 == 0) {
        let sideLength = iDigitArray.length / 2;
        function flipableDigitsChecker() {
            let re = RegExp('[2-57]', 'g');
            if (!re.exec(iString)) {
                isEachDigitFipable = true;
            }     
        }
        function sixNineChecker() {
        for (let i = 0; i < sideLength; i++) {
            if (iDigitArray[i] == 6 && iDigitArray[iDigitArray.length - i - 1] != 9) {
                isSixNineOK = false;
            } else if (iDigitArray[i] == 9 && iDigitArray[iDigitArray.length - i - 1] != 6) {
                isSixNineOK = false;
            } else if (iDigitArray[i] != 9 && iDigitArray[i] != 6 && (iDigitArray[iDigitArray.length - i - 1] == 6 || iDigitArray[iDigitArray.length - i - 1] == 9)) {
                isSixNineOK = false;
            } 
          }
        }
        function symetryChecker() {
        for (let i = 0; i < sideLength; i++) {
            if (iDigitArray[i] != iDigitArray[iDigitArray.length - i - 1] && iDigitArray[i] != 6 && iDigitArray[i] != 9) {
                isSymetric = false;
            }
          }
        }
        flipableDigitsChecker();
        sixNineChecker();
        symetryChecker();
        if (isEachDigitFipable && isSymetric && isSixNineOK) {
            sum++;
        }
    //dealing with numbers of an odd number of digits
      } else {
        let sideLength = (iDigitArray.length - 1) / 2;
        function flipableDigitsChecker() {
            let re = RegExp('[2-57]', 'g');
            if (!re.exec(iString)) {
                isEachDigitFipable = true;
            }   
        }
        function sixNineChecker() {
        for (let i = 0; i < sideLength; i++) {
            if (iDigitArray[i] == 6 && iDigitArray[iDigitArray.length - i - 1] != 9) {
                isSixNineOK = false;
            } else if (iDigitArray[i] == 9 && iDigitArray[iDigitArray.length - i - 1] != 6) {
                isSixNineOK = false;
            } else if (iDigitArray[i] != 9 && iDigitArray[i] != 6 && (iDigitArray[iDigitArray.length - i - 1] == 6 || iDigitArray[iDigitArray.length - i - 1] == 9)) {
                isSixNineOK = false;
            } 
          }
        }
        function symetryChecker() {
        for (let i = 0; i < sideLength; i++) {
            if (iDigitArray[i] != iDigitArray[iDigitArray.length - i - 1] && iDigitArray[i] != 6 && iDigitArray[i] != 9) {
                isSymetric = false;
            }
          }
        }
        flipableDigitsChecker();
        sixNineChecker();
        symetryChecker();
        if (isEachDigitFipable && isSymetric && isSixNineOK && (iDigitArray[sideLength] == 0 || iDigitArray[sideLength] == 1 || iDigitArray[sideLength] == 8)) {
            sum++;
        } 
      }
    }
    return sum;
}