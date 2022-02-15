//Birthday Cake Candles Solution :)

function birthdayCakeCandles(candles) {
    var maxCount= 0;
    var candlesMax = Math.max(...candles);
    for (let i=0; i<candles.length ; i++) {
        if (candles[i]==candlesMax) {
            maxCount++;
        }
    }
    return maxCount;
} 
