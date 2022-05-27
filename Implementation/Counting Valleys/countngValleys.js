// Counting valleys solution :)
function countingValleys(steps, path) {

    let valley = 0;
    let altitude = 0;
    path.split("").forEach(path => {
        path === "D" ? altitude -= 1 : altitude += 1;
        altitude === 0 && path === "U" ? valley += 1 : valley;
    });
    return valley

}