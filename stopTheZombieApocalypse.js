// 5 kyu
// Stop the Zombie Apocalypse!

function findZombies(matrix) {
    let exposedList = [[0, 0]], checkedList = [], counter;
    const infected = matrix.map(rowArr => {
        let row = [];
        for (let i = 0; i < rowArr.length; i++) {
            row.push(0);
        }
        return row;
    });
    infected[0][0] = 1;
    function checkCross(i, j) {
        if (i > 0 && matrix[i-1][j] === matrix[i][j] && !checkedList.includes(`${i-1}${j}`)) {
            infected[i-1][j] = 1;
            exposedList.push([i-1, j]);
            counter++;
        }
        if (j > 0 && matrix[i][j-1] === matrix[i][j] && !checkedList.includes(`${i}${j-1}`)) {
            infected[i][j-1] = 1;
            exposedList.push([i, j-1])
            counter++;
        }
        if (j < matrix[i].length - 1 && matrix[i][j+1] === matrix[i][j] && !checkedList.includes(`${i}${j+1}`)) {
            infected[i][j+1] = 1;
            exposedList.push([i, j+1]);
            counter++;
        }
        if (i < matrix.length - 1 && matrix[i+1][j] === matrix[i][j] && !checkedList.includes(`${i+1}${j}`)) {
            infected[i+1][j] = 1;
            exposedList.push([i+1, j]);
            counter++;
        }
        checkedList.push(`${i}${j}`);
    }
    function nextStep() {
        counter = 0; 
        for (let pair of exposedList) {
            checkCross(...pair);
        }
        if (counter > 0) {
            exposedList = exposedList.splice(-counter);
        }
    }
    nextStep();
    while (counter > 0) {
        nextStep();
    }
    return infected;
}