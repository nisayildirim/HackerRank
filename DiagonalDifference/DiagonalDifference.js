
//Diagonal Difference Solution :)


function diagonalDifference(arr) {

    const length = arr.length;
    let leftDiagonal=0;
    let rightDiagonal=0;

    for (let i = 0; i < arr.length ; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][length-1-i];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}
