//QUESTION # 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

import { log } from "console";

let car : string = "Subaru"
let age : number = 25
let number : number[]= [1,2,3,4]

//String Test
// Test for Equality

console.log ("is car =='Subaru' ? I predict true");
console.log (car =='Subaro'); // True

// Test for strict Equality

console.log ("is car === 'Subaru' ? I predict false");
console.log (car === 'Subaro'); // False

//Test for inequality
console.log("is car != 'Toyota' ? I predict true");
console.log(car != 'Toyota'); //True

console.log("is car !== 'Subaru' ? I predict false");
console.log(car !== 'Subaru'); // False

// Lowercase function Tests

console.log("is car.toLowerCase() =='subaru' ? I predict true");
console.log(car.toLowerCase() =='subaru'); // True

console.log("is car.toLowerCase() ==='subaro' ? I predict false");
console.log(car.toLowerCase() ==='subaro'); // False

// Numerical Tests

console.log("is age == 25 ? I predict true");
console.log(age ==25);


console.log("is age != 30 ? I predict true");
console.log(age != 30);

console.log("is age > 25 ? I predict false");
console.log(age > 25);


console.log("is age >= 25 ? I predict true");
console.log( age >= 25);


console.log("is age < 25 ? I predict false");
console.log(age < 25);


console.log("is age <= 25 ? I predict true");
console.log(age <= 25);

// Tests using or and & operators

// Logical Operators

console.log("is car == 'Subaru' && age == 25 ? I predict true");
console.log(car == 'Subaru' && age == 25);

console.log("is car == 'Subaru' || age == 25 ? I predict true");
console.log(car == 'Subaru' || age == 25);

console.log("is car == 'Toyota' || age == 25 ? I predict false");
console.log(car == 'Toyota' || age == 25);


console.log("is car == 'Toyota' && age == 25 ? I predict false");
console.log(car == 'Toyota' && age == 25);


// Array Tests
// In Array (True)
console.log("is 1 in number ? I predict true");
console.log(1 in number);


// Not in an Array (False)
console.log("is 5 in number ? I predict false");
console.log(5 in number);









