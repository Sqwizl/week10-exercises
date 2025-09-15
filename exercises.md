# Week 9 Exercises

## 1. Playing Around With Objects

- Create some (3+) objects to represent different types of data (like a book, a
  car, and a student). Define some properties for each and log the entire object
  to the console using `console.log()`

- Update these properties using both dot notation and bracket notation, then log
  the updated objects to the console.

- Log the `document.body` object with `console.log()` and `console.dir()`. What is 
  the visible difference?

## 2. Object With Methods

- Make an object for a bank account with a property for the current balance, and
  methods to deposit and withdraw money. Show how the balance changes with each
  transaction.

- Add some logging to the methods that deposit and withdraw money. Your console
  should read something like:
  ```
  Account balance now: 0.
  Account deposit: 100.
  Account balance now: 100.
  Account withdrawal: 75.
  Account balance now: 25.
  ```

<details>
  <summary>Click here for hints</summary>

## Hints

This could be your general structure:

```js
  let account = { ... }

  console.log(account.balance);
  account.deposit(100);
  console.log(account.balance);
  account.withdraw(75);
  console.log(account.balance);
```

Fill in the account object with the `balance` property, as well as `deposit` and `withdraw` methods.

</details>

## 3. String Methods

1. Use copy & paste to get this string into a new program.

```js
let string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tempus justo. " +
  "Praesent non sagittis arcu. Etiam elementum enim eros. Sed risus erat, varius a " +
  "rhoncus ut, pulvinar varius ligula";
```

- Using built-in JavaScript methods, find out the length of the string and log
  the result to the console.
- Convert the string to upper case and log the result to the console.
- Convert the string to lower case and log the result to the console.

2. Find a method that removes all _trailing_ spaces from this string:
   `"lots of spaces       "`, use it and log the result to the console.

## 4. Number Methods

Work with a set of numbers and use number methods (like `toString()`,
`toFixed()`) to convert and format these numbers.

- Find out how to convert the number `2342` into a string.
- Find out how to convert the string `"2342"` into a number.
- Find out how to convert the string `"23.42"` into a number.
- Find out how to round the number `23.4599` to 2 decimals after the dot (to
  `23.46`)

## 5. Counter Update

Create an HTML page with a `<div>` containing the number 0, and a `<button>`.

When clicked, the button should use JavaScript to update the content of the
`<div>` and increment the number by 1.

<details>
  <summary>Click here for hints</summary>

## Hints

- You can either get the current number from the `<div>`, increment it and write
  it back.
- To convert a string into an integer you can use the `parseInt(<string>)`
  function.
- Or you can keep the counter value in a state variable, increment that, and
  write it to the `<div>`. A state variable is a variable that captures information
  which changes during the program's lifetime (like the current number of a counter, 
  which is different when the program starts to when the button has been clicked and 
  the counter incremented multiple times).
- You need go give the `<div>` an `id` to access its value using
  `document.getElementById`

</details>

## 6. Object Comparison

What does the following code output?

```
let person1 = { name: 'John' };
let person2 = { name: 'John' };
console.log(person1 == person2);
```

Why is this surprising? What could this mean?

- How could we work around this?

---

## 7. Write arrow functions

Write different arrow functions with one parameter for these purposes:

1. returns `true` when the argument given was "Bob"
2. returns the argument's value incremented by 1
3. when given a String, returns the first letter

## 8. Using string as an array

1. Access the third character of the string `"world"` using array indexing.
2. Convert the string `"hello"` to an array of characters. Output each character
   with a space: `h e l l o`.

## 9. Push pop shift unshift <<

Create an array with all numbers between 1 - 4 (including 1 and 4), then:

1. Push 5 to the end
2. Pop the last number
3. Shift the first number out
4. Unshift 0 to the beginning

After every step, `console.log()` the array.

### 10. Guess the number

Starting with the following HTML:

```html
<label>
  Guess a number between 0 and 99
</label>
<input type="text" id="guess">
<button onclick="checkGuess()">
  Check my guess
</button>
<label id="correct-or-not">
  Start guessing!
</label>
```

Build a number guessing game. To get a random number between 0 and 99, start with this JS:

```js
const numberToGuess = Math.floor(Math.random() * 100);
```

---

### 10. Iterator heaven

Create an array of 10 values. Write five functions to iterate it, using:

1. `forEach`
2. `for .. of`
3. `for`
4. `while`
5. `do-while`.

### 11. Arrays from Arrays / `map` and `filter`

Research the array method `filter`.

```js
const numbers = [1, 2, 3, 4];
```

1. Use `map` to create a new array where each element is doubled. New array
   should contain: `[2, 4, 6, 8]`
2. Use `filter` to create a new array with only numbers greater than 2. New
   array should contain: `[3, 4]`
3. Use `filter` to create a new array with only even numbers. Then use map to
   create a new array with those even numbers, squared. Last array should
   contain: `[4, 16]`. Hint: a number is even if (`number % 2 == 0`).

### 12. `while(true)` and `break`

Start with a variable `number` set to `0`.

1. Write a loop, using `while(true)`. Each iteration should increment the number
   by 1, until it reaches 10 - then abort using `break`. After the loop is
   finished, output `number` to the console. It should be `10`.

2. Write the same loop using `do-while`

### 13. `forEach` functions

Starting with this code:

```js
let numbers = [1, 2, 3];
let total = 0;

numbers.forEach(...)
```

1. Use forEach to log each element of an array to the console. Output should be:

```
1
2
3
```

2. Use forEach to add each element of an array to a total. Output should be:

```
6
```

### 14. Nested for-loop

Use nested for-loops to generate a multiplication table (1 to 10). Nested means,
put one for-loop inside another for-loop

Output should be:

```
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3

...

10 * 8 = 90
10 * 9 = 90
10 * 10 = 100
```

### 15. More Array methods

```js
const arr = [5, 8, 12, 20, 1, 0, 4];
```

1. Use `find` to get the first number in the array greater than 10.
2. Reverse the array.
3. Sort the array in ascending order.
4. Sort the array in descending order.
5. Use `every` to check if all elements in the array are positive numbers.
6. Merge two arrays `[1, 2]` and `[3, 4]` using `concat`.

### 16. `reduce`

**This is a hard challenge at this point**

- Research the `Array.reduce` function. It works a lot like `forEach` and `map`,
  but it will pass two parameters to the function you pass to it. Starting from
  an array `[1, 2, 3]`, sum up the squares of all elements. The result should be
  `14`
