// 7 kyu
// How many days are we represented in a foreign country?

function daysRepresented(trips) {
    let finalArr = [];
    for (let i = 0; i < trips.length; i++) {
        trips[i] = ([...Array(trips[i][1] + 1 - trips[i][0]).keys()].map(a => a + trips[i][0]));
        for (let j = 0; j < trips[i].length; j++) {
            finalArr.push(trips[i][j]);
        }
    }
    return [...new Set(finalArr)].length;   
}