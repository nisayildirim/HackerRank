//Grading Student Solution :)

function gradingStudents(grades) {
    return grades.map((n) => {
        let diff = 5 - (n % 5);
        if(diff < 3 && n > 37) {
            n += diff;
        }
        return n;
    })
}