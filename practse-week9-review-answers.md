1. 
a) true
b) true
c) false
d) false
e) true

2. 
a)log will show "cat" as it is within the outer block of the curly braces{}
b)log wll show "dog" as it is outside of the block of the {}
c)it will come back as a type of error or undefined as the let sound is within the block of the {}

3. 
function calculateTotal(item1, item2, item3) {
    return item1 + item2 + item3;
}
calculateTotal(10, 20, 30);
a) calculateTotal is functon name.
b) Parameters are item1, item2, item3
c) Arguements are whats within the brackets (10, 20, 30)

4. 
<!--function calculateVolume(length, width, height) {
    return length * width * height;
} -->
a) calculateVolume(3, 4, 5);
b) calculateVolume(6, 6, 6);
c) calculateVolume(2, 8, 3);

5. 
function displayStudent(name, age, grade){
    console.log("Student Name: " + name);
    console.log("Age: " + age + "years old");
    console.log("Grade: " + grade);
    }    
displayStudent("Stacey", 32, "A")

6. 
<!--funtion calculateDiscount(originalPrice discountRate {
    console.log("The discounted price is " + originalPrice * discountRate + " dollars");
} 

calculateDiscount(100 "0.2") -->
1) 'funtion' is misspelled. Correction - 'function'
2)  missing comas between paramaters. Correction - (100, "0.2") 
3) missing closing parentheses for function parameters. Correction - Add ')' after discountRate
4) the calculation in console.log is wrong. Parentheses should be used when do calulation. The multplication * has higher precendence than the + concatenation. so multiply within parentheses, the the result can be concatenated as a string. Correction  - (orignalPrice * discountRate) 
5) function call is incorrect. Need to remove the quotes around 0.2 as it is a number not a string. Adding a coma between the two values given will allow Javascript to run correctly.
Correction - calculateDiscount(100, 0.2);

7. 
<!-- function printHobby(activity, frequency) {
    console.log("I enjoy " + activity);
    console.log("I do it " + frequency);
}
printHobby("reading", "daily");
printHobby("swimming", "weekly"); -->

a) twice
b) I enjoy reading
I do it daily
I enjoy swimming
I do it weekly

8. 
<!-- function createShoppingList(item1, item2, item3) {
    let currentTime = new Date().toTimeString();
    let listId = Math.floor(Math.random() * 100);
    console.log("Shopping List #" + listId);
    console.log("Created at: " + currentTime);
    console.log("Items: " + item1 + ", " + item2 + ", " + item3);
    console.log("Total items: 3");
} -->

a) "Items: " + item1 + ", " + item2 + ", " + item3);
"Total items: 3" - hardcoded static text
Shopping List #
"Created at: "
the format is static as it will always be the same text but the list number and time will change each time the function is called.
b)The values for currentTime and listId will be different each time the function is called, so the output will vary.
item1, item2, and item3 will depend on the arguments passed to the function when it is called, so they can also vary.
    console.log("Shopping List #" + listId);
    console.log("Created at: " + currentTime);
these two lines will produce different outputs each time the function is called.