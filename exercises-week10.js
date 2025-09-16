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


function classifyGrade(score) {
    if (score > 100 || score < 0) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
        // if score is 90 or above, print 'A'
    } else if (score >= 80) {
        return "B";
        // if score is 80 - 89, print 'B'
    } else if (score >= 70) {
        return "C";
        // if score is 70 - 79, print 'C'
    } else if (score >= 60) {
        return "D";
        // if score is 60 - 69, print 'D'
    } else {
        return "F";
        // if score is below 60, print 'F'
    }
}
const result1 = classifyGrade(95);
const result2 = classifyGrade(73);
const result3 = classifyGrade(45);
console.log(result1); // should print 'A'
console.log(result2); // should print 'C'
console.log(result3); // should print 'F'


// Function to convert temperature between Celsius and Fahrenheit
function convertTemperature(temperature, unit) {
  // Check if unit is Celsius (case-insensitive)
  if (unit === "C" || unit === "celsius") {
    // Convert Celsius to Fahrenheit using: F = (C × 9/5) + 32
    return (temperature * 9/5) + 32;
  } else if (unit === "F" || unit === "fahrenheit") {
    // Convert Fahrenheit to Celsius using: C = (F - 32) × 5/9
    return (temperature - 32) * 5/9;
  } else {
    // If unit is not recognized, return NaN
    return NaN;
  }
}

console.log(convertTemperature(32, "F")); // Should print 0
console.log(convertTemperature(0, "C"));  // Should print 32


// Function to classify age into categories
function classifyAge(age) {
  // Handle negative ages
  if (age < 0) {
    return "Invalid age";
  } else if (age >= 0 && age <= 12) {
    // 0-12: Child
    return "Child";
  } else if (age >= 13 && age <= 17) {
    // 13-17: Teenager
    return "Teenager";
  } else if (age >= 18 && age <= 64) {
    // 18-64: Adult
    return "Adult";
  } else if (age >= 65 && age <= 79) {
    // 65-79: Senior
    return "Senior";
  } else if (age >= 80) {
    // 80+: Elderly
    return "Elderly";
  }
}

// Test cases
console.log(classifyAge(15));   // Should print "Teenager"
console.log(classifyAge(45));   // Should print "Adult"
console.log(classifyAge(75));   // Should print "Senior"
console.log(classifyAge(85));   // Should print "Elderly"
console.log(classifyAge(-5));   // Should print "Invalid age"




// Function to check if a number is within a given range
function isInRange(number, min, max) {
  // Check if number is below the minimum
  if (number < min) {
    return "Number is below range";
  } else if (number > max) {
    // Check if number is above the maximum
    return "Number is above range";
  } else if (number === min) {
    // Check if number is at the minimum boundary
    return "Number is at minimum boundary";
  } else if (number === max) {
    // Check if number is at the maximum boundary
    return "Number is at maximum boundary";
  } else if (number > min && number < max) {
    // Check if number is within the range
    return "Number is within range";
  }
}

// Test cases
console.log(isInRange(5, 1, 10));   // Should print "Number is within range"
console.log(isInRange(15, 1, 10));  // Should print "Number is above range"
console.log(isInRange(1, 1, 10));   // Should print "Number is at minimum boundary"
console.log(isInRange(10, 1, 10));  // Should print "Number is at maximum boundary"