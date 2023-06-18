function studentMarks(grade) {
    if (grade => 79) {
        return 'you got an A';
    }
}
if (grade => 60 && grade <= 79) {
    return 'you got a B';
}
else if (grade => 49 && grade <= 59) {
    return 'you got a C'
}
else if (grade => 40 && grade <= 49) {
    return 'you got a D';
}
else (grade < 40) {
    return 'you got an E';
}
