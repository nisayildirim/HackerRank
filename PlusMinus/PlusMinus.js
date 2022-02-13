//Plus Minus Solution :)

function plusMinus(arr) {
    const length = arr.length;
    var plusNumber = 0 , minusNumber=0 , zeroNumber=0;
        for (let i=0; i<arr.length;i++){
            if (arr[i] > 0 ){
                plusNumber++ ;           
            }else if (arr[i] < 0) {
                minusNumber++;
            }else {
                zeroNumber++;
            }
        
        }
        
        var plus = plusNumber/length,
            minus = minusNumber/length,
            zeros = zeroNumber/length;
        
            // not "return" its true with "console.log" and different lines with "\n"
       console.log(plus.toFixed(6)+"\n"+ minus.toFixed(6)+"\n"+zeros.toFixed(6));

}
