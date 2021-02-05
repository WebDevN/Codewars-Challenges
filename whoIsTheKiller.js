// 7 kyu
// Who is the killer?

function killer(suspectInfo, dead) {
    let possible = 0, numDead = dead.length;
    for (let suspect in suspectInfo) {
      possible = 0;
      for (let vtm of dead) {
        for (let seen of suspectInfo[suspect]) {
          if (seen === vtm) {
            possible++;
          }
        }
      }
      if (possible === numDead) {
        return suspect;
      }
    }
  }