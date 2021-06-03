var myName = "Marcus";
var person1 = 'Josh'
var person2 = `Brenda`;
let animal = "tiger";
var myname = "Jeff"

const weather = "cloudy";
console.log("Weather Changed", weather);

// const weather = "rainy";

console.log("My Name is", myName);

// Reassigning a variable we do not need to reinitialize the value
myName= "Steve";

console.log("My Name Changed to", myName);

let phrase ="Good Morning";

// console.log(phrase, myName ); // Works fine

// console.log(phrase+" "+myName); // Works fine

console.log(`${phrase} ${myName}`);

let example = "ThE FoX JUmpeD OveR the Turtle";

console.log(example.toLocaleLowerCase());

let name1 = "Marco";
let name2 = "MaRcO";

let match = name1.toLocaleLowerCase() === name2.toLocaleLowerCase(); //Comparison

console.log("Do Names Match:", match);


console.log("Does Example have this word in it?:", example.includes("FoX"));

console.log("Length of Example:", example.length);


