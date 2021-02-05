// 6 kyu
// Library Opening Times

function openingTimes(str) {
    let nowArr = str.toLowerCase().split(" ");
    nowArr[1] = Number(nowArr[1].slice(0, 2));
    nowArr.push(Number(str.slice(-2)));
    let [nowDay, nowHour, nowMin] = nowArr;

    if (nowHour > 23 || nowMin > 59) {
        return "Invalid time!";
    }
    
    let rslt; 
    switch (nowDay) {
        case "sunday":
            if (nowHour < 12) {
                rslt = "Library opens: today 12:00"
            } else if (nowHour >= 12 && nowHour < 16) {
                rslt = "Library closes at 16:30";
            } else if (nowHour == 16 && nowMin < 30) {
                rslt = "Library closes at 16:30";
            } else {
                rslt = "Library opens: Monday 08:00";
            }
            break;
        case "monday":
            if (nowHour < 8) {
                rslt = "Library opens: today 08:00"
            } else if (nowHour >= 8 && nowHour < 20) {
                rslt = "Library closes at 20:00";
            } else {
                rslt = "Library opens: Tuesday 08:00";
            }
            break;
        case "tuesday":
            if (nowHour < 8) {
                rslt = "Library opens: today 08:00"
            } else if (nowHour >= 8 && nowHour < 20) {
                rslt = "Library closes at 20:00";
            } else {
                rslt = "Library opens: Wednesday 08:00";
            }
            break;
        case "wednesday":
            if (nowHour < 8) {
                rslt = "Library opens: today 08:00"
            } else if (nowHour >= 8 && nowHour < 20) {
                rslt = "Library closes at 20:00";
            } else {
                rslt = "Library opens: Thursday 08:00";
            }
            break;
        case "thursday":
            if (nowHour < 8) {
                rslt = "Library opens: today 08:00"
            } else if (nowHour >= 8 && nowHour < 20) {
                rslt = "Library closes at 20:00";
            } else {
                rslt = "Library opens: Friday 08:00";
            }
            break;
        case "friday":
            if (nowHour < 8) {
                rslt = "Library opens: today 08:00"
            } else if (nowHour >= 8 && nowHour < 20) {
                rslt = "Library closes at 20:00";
            } else {
                rslt = "Library opens: Saturday 10:00";
            }
            break;
        case "saturday":
            if (nowHour < 10) {
                rslt = "Library opens: today 10:00"
            } else if (nowHour >= 10 && nowHour < 18) {
                rslt = "Library closes at 18:00";
            } else {
                rslt = "Library opens: Sunday 12:00";
            }
            break;
        default:
            rslt = "Invalid time!"
    }
    return rslt;
}