// Apple and Orange Solution :)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCounter = 0;
    let orangeCounter = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i]>= s && a + apples[i]<= t) {
            appleCounter++;
        }
    }
    for (let j = 0; j < oranges.length; j++) {
        if (b + oranges[j]>= s && b + oranges[j]<= t ) {
            orangeCounter++;
        }
    }
    console.log(appleCounter);
    console.log(orangeCounter);
}

