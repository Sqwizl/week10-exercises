```js
//creating the function usng parameters number1, number2, number3.
function largestOf3(number1, number2, number3) {
  // checking if the condtions are true. number1 is greater or equal to number2 as the first part of the scope. Then checking again if number1 is greater than number3.
  if (number1 >= number2 && number1 >= number3) {
    // if the scope returns true than it will print number1 as the greater value.
    return number1;
    // If the first condition wasn’t true, this one checks if number2 is greater than or equal to number1 and then checks again if number2 is greater than number3
  } else if (number2 >= number1 && number2 >= number3) {
    // If this condition is true, it will return number2 as the largest value.
    return number2;
  } else {
    // If either of these conditions are false.
    //the number3 will be printed as the largest value.
    return number3;
  }
}
```

// My approach to the solutions works based off using && to make sure that the function is evaluating each number against each other.
// The scope that I am asking will execute each line of code correctly. As the && operators are checking each value twice in a way to ensure it gets the greater value.
// Using the && operator over the || operator will ensure that the values are being checked against each other as the || represent an 'or' question, which wouldn't allow the function to execute correctly and would return and undefined error.

## Feedback

Excellent solution! Nice job using the correct syntax and handling the case where multiple numbers can have the same value. I also liked your decision and explanation of the `else` condition. 

Very small things but you have a few typos in your comments and some comments star with capital/lowercase and some with a space/no space. This seems small but it's best practice to consider every character we write as being significant. 

Grade: 95% for a strong correct solution. -5% For typing errors.
