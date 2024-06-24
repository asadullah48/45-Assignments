// Question # 42

/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified*/


// Define the function to show magician names
function show_magician(magician: string[]){
magician.forEach(name => console.log(name));
}

// Function to make magician great through , map() it will modify array
function make_greats(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}

// Define an array of magician name
let magician_name = ["Dynamo", "Penn and Teller", "Criss Angel"];

// Call make_great function to modify magicians names
let great_magician = make_greats(magician_name);

// Call show_magicians that show modified list of magicians
show_magician(great_magician);