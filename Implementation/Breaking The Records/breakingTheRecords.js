function breakingRecords(scores) {
    var highestScore = scores[0],
        lowestScore = scores[0],
        maxCounter = 0,
        minCounter = 0;
        
    for (let i= 1; i<scores.length;i++) {
        if (scores[i]>highestScore) {
            highestScore=scores[i];
            maxCounter++;
            continue;
        }
        if (scores[i]<lowestScore) {
            lowestScore=scores[i];
            minCounter++;
            continue;
        }
    }
    return [maxCounter,mşnCounter];

}
