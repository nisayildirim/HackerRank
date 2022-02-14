//Staircase Solution :)

function staircase(n) {
    var space = " ";
    var hash = "#";
    for (let i=1; i<n+1 ;i++){
        console.log( space.repeat(n-i)+hash.repeat(i) )          //console.log provides new line every time
    }
}
