// Time Conversion Solution :)

function timeConversion(s) {
    // divide into smaller pieces
    var ampm =s.substring(8);               //returns str
    var wholeTime = s.substring(0,8);  
    var timesArr=wholeTime.split(":");      //returns arr
    
    if (ampm==="PM") {                      //if pm + 12 except 12
        if (timesArr[0]!=="12") {
            timesArr[0] = parseInt(timesArr[0]) + 12;
        }
    }else {    // =="AM"
        if (timesArr[0]=="12") {
            timesArr[0] = "00";
        }
    }
    return timesArr.join(":");
}