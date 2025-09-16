
### Question 4: Temperature Converter
Write a function called `convertTemperature` that takes two parameters: `temperature` (number) and `unit` (string). The function should convert between Celsius and Fahrenheit based on the unit parameter.

**Requirements:**
- If unit is "C" or "celsius": convert from Celsius to Fahrenheit using formula: F = (C × 9/5) + 32
- If unit is "F" or "fahrenheit": convert from Fahrenheit to Celsius using formula: C = (F - 32) × 5/9
- Return the converted temperature as a number
- Use nested conditional structures (if-else if-else)
- Include comments explaining the conversion formulas
- Test with: `convertTemperature(32, "F")` should return `0`, `convertTemperature(0, "C")` should return `32`

---

### Question 5: Age Category Classifier
Write a function called `classifyAge` that takes an age parameter and returns a category based on age ranges. The function should handle multiple age categories with specific conditions.

**Requirements:**
- Return categories based on age:
  - 0-12: "Child"
  - 13-17: "Teenager" 
  - 18-64: "Adult"
  - 65-79: "Senior"
  - 80+: "Elderly"
- Use multiple if-else if-else statements
- Include logical operators (&&) to check age ranges
- Add comments for each age category
- Handle edge cases (negative ages should return "Invalid age")
- Test with: `classifyAge(15)`, `classifyAge(45)`, `classifyAge(75)`, `classifyAge(-5)`

---

### Question 6: Number Range Checker

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

**Requirements:**
- Return different messages based on number's position:
  - If number is less than min: "Number is below range"
  - If number is greater than max: "Number is above range"
  - If number equals min: "Number is at minimum boundary"
  - If number equals max: "Number is at maximum boundary"
  - If number is between min and max: "Number is within range"
- Use comparison operators (>, <, >=, <=, ==)
- Use logical operators (&&, ||) for range checking
- Include nested conditional structures
- Add comments explaining each condition
- Test with: `isInRange(5, 1, 10)`, `isInRange(15, 1, 10)`, `isInRange(1, 1, 10)`, `isInRange(10, 1, 10)`

---

## Key Concepts Being Practiced:
- Function parameter handling
- Conditional logic (if/else statements)
- Comparison operators (>, <, >=, <=, ==)
- Logical operators (&&, ||)
- Nested conditional structures
- Return statements
- Code commenting