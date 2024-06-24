// Question # 38

/*Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, 
at least one of which is not in the default country.*/


// Describe a function
function Describe_city (City: string, Country: string = "USA"){
console.log(`${City} is in ${Country}`);
}

// Calling a function
Describe_city ("Chicago");

Describe_city ("New York");

Describe_city ("Karachi", "Pakistan");
