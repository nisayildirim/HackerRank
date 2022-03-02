// Divisible Sum Pairs :)

function divisibleSumPairs(k, ar) {
    var pairCounter=0
    for (let i=0; i<ar.length ; i++) {
        for ( let j=0; j<ar.length ; j++) {
            if (ar[i]>ar[j] && (ar[i]+ar[j])%k ==0) {
                pairs++;
            }
        }
    }
    return pairCounter;
}