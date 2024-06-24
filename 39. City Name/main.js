"use strict";
//Question # 39
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.*/
// Creating a function with parameters which return a values in string
function City_Country(City, Country) {
    return `${City} , ${Country}`;
}
// Calling a function and print the returned value
console.log(City_Country("Karachi", "Pakistan"));
console.log(City_Country("Gottingen", "Germany"));
console.log(City_Country("Chikago", "USA"));
