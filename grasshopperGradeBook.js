// 8 kyu
// Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    let avgScore = (s1 + s2 + s3) / 3;
    if (90 <= avgScore && avgScore <= 100) {
      return "A";
    } else if (80 <= avgScore && avgScore < 90) {
      return "B";
    } else if (70 <= avgScore && avgScore < 80) {
      return "C";
    } else if (60 <= avgScore && avgScore < 70) {
      return "D"
    }
    return "F";
  }