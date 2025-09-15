function isGreater(a, b) {
    return a > b;
}
console.log(isGreater(5, 3));

// entered the correct function isGreater and parameter names are lowercase a, b and will return a true result in console

function isGreater(a, b) {
    return a > b;
}
console.log(isGreater(3, 5));

// entering a number not greater first will log a false result in the console.

function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(maxOfTwo(8, 12));

// the function asks what is the greater value from the maximum of two numbers.
// it checks if a is greater than b and if true t wll return a
// if false it will return b
//since 12 is greater than 8, it will return 12

function classifyGrade(score) {
    if (score >= 90) {
        return "A"
    }
    else if (score >= 80 && score <= 89) {
        return "B"
    }
    else if (score >= 70 && score <= 79) {
        return "C"
    }
    else if (score >= 60 && score <= 69) {
        return "D"
    }
    else if (score < 60) {
        return "F"
    }
}
console.log(classifyGrade(95));
console.log(classifyGrade(73));
console.log(classifyGrade(45));

// the function classifyGrade will take a score and return a letter grade based on the score
// the first console log will return A since 95 is greater than 90
// the second console log will return C since 73 is between 70 and 79
// the third console log will return F since 45 is less than 60