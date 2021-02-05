// 8kyu
// For Twins: 2. Math operations

function iceBrickVolume(radius, bottleLength, rimLength) {
    let brickHeight = bottleLength - rimLength; 
    let brickTopArea = Math.pow(2 * radius/Math.sqrt(2), 2);
    return Math.round(brickHeight * brickTopArea);
  }