// Number Line Jumps Solution :)

function kangaroo(x1, v1, x2, v2) {
    let result = "NO";     //in this logic we try to make "no" to "yes"
    for (let t = 0; t < 10000 && result == "NO"; t++) {
        if (x1 + v1 * t == x2 + v2 * t) {
            result = "YES";
        }
    }
    return result;
}