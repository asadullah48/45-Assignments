// QUESTION # 41

/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array*/


// Ddefine a function to print each Magician name from an array
function show_Magicians(Magicians: string[]){
   Magicians.forEach(name => console.log(name));
}

// Define an arry containing Magicians name
let Magicion_Names =["Harry Houdini", "Criss Angel", "Harry Blackstone jr"]

// call the function to print each magician name
show_Magicians(Magicion_Names);