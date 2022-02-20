// loading... :)
//trial 1

function timeConversion(s) {
    var pmRegExp = /PM/i;
    var pmReplace = s.replace(pmRegExp,'');
    var pmSplit = pmReplace.split(":");



    var amRegExp = /AM/i;
    var amReplace = s.replace(amRegExp,'');
    var amSplit = amReplace.split(":");
    
    
    
 // trial 2
 function timeConversion(s) {
    var pmPairs  = {1:"13",
                    2:"14",
                    3:"15",
                    4:"16",
                    5:"17",
                    6:"18",
                    7:"19",
                    8:"20",
                    9:"21",
                    10:"22",
                    11:"23",
                    12:"12"};
    var amPairs = {1:"1",
                    2:"2",
                    3:"3",
                    4:"4",
                    5:"5",
                    6:"6",
                    7:"7",
                    8:"8",
                    9:"9",
                    10:"10",
                    11:"11",
                    12:"00"}
                    
    if (s.replace(/PM/i,"")) {
        var pmArr = s.split(":");
        return pmArr.map(pm => [pm,pair[pm]]);
    }
        else if (s.replace(/AM/i,"")) {
        var amArr = s.split(":");
        return pmArr.map(pm => [pm,pair[pm]]);
        
    }
}
    
//trial 3

function timeConversion(s) {
    var sSplit = s.split(":");

    if sSplit[2]

    var pm  =+12
    var am =12ise 0

}