"use strict";
// Question # 44
Object.defineProperty(exports, "__esModule", { value: true });
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times,
 using a different number of arguments each time*/
// Define a function with a rest parameter that accept items arguments representing our sandwhich
function makeSandwhich(...items) {
    console.log("\nMaking a Sandwhich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwhich\n");
}
// Call the function 3 times different number of arguments
makeSandwhich("Bread", "Chicken", "Mayo", "Egg");
makeSandwhich("Bread", "Chicken", "Cheese", "Tomato", "Cucumber");
makeSandwhich("Bread", "Chicken", "cheese", "Olive", "Mushroom", "Egg");
