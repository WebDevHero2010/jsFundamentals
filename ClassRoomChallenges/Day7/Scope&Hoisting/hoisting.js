/*
HOISTING
Hoisting -- variables and functions are being committed to memory to referenced later. Contrary to what the name might suggest nothing
is being moved.
*/

console.log(firstName);
var firstName = "Marcus"
console.log(firstName);

example(); // code reads TOP to DOWN. It sees we are invoking a function called example that hasn't been made yet. 

function example(){
    //Once it reaches a function called example it is going to run.
    console.log ("I have been hoisted!")
}

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

petName("Connor");

petName("Connor"); //context execution. It understands the context and will execute anyway. (another name for Hoisting)

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

/* ONLY DECLARATIONS ARE HOISTED
*/
console.log(hello);
hello = "hi"; //This will not be committed to memory. It is not being declared!

console.log(pet1 + " and " + pet2);
var pet2 = "chloe";
pet1 = "Connor"; //This will not be committed to memory
