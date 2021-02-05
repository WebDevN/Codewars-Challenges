// 5 kyu
// Simple Pig Latin

function pigIt(str) {
    splt = str.split(" ");
    for (let i = 0; i < splt.length; i++) {
        splt[i] = splt[i].split("");
        let puncCodes = [33, 35, 37, 39, 44, 45, 46, 47, 58, 59, 63, 64, 94, 95]
        if (splt[i].length == 1 && puncCodes.includes(splt[i][0].charCodeAt(0))) {
        } else if (!puncCodes.includes(splt[i][splt[i].length - 1].charCodeAt(0))) {
        splt[i].splice(splt[i].length - 1, 0, splt[i].splice(0, 1)[0] + "ay");
        } else {
        splt[i].splice(splt[i].length - 2, 0, splt[i].splice(0, 1)[0] + "ay");
        }
        splt[i] = splt[i].join("");
    }
    return splt.join(" ");
}