
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
Write a function called `isInRange` that takes three parameters: `number`, `min`, and `max`. The function should determine if the number falls within the specified range and return different messages based on the position.

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