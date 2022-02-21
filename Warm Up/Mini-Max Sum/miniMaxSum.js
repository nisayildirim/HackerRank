//Mini-Max Sum :)

function miniMaxSum(arr) {
    var min = Math.min(...arr),
        max = Math.max(...arr),
        sum = 0;
        
        for (let i=0; i< arr.length ;i++) {
            sum += arr[i];
        }
        console.log((sum-max)+" "+(sum-min));
}