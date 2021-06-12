
function greeting (){
    // CODE GETS EXECUTED WHEN THE FUNCTION IS CALLED
    console.log("Hello from greeting")
}

// FUNCTIONS WITH EXPRESSIONS
// ORDER MATTERS
// The key difference between a function expression and function declaration is...
// declarations get hoisted
// expressions do NOT !!!!
let greetingExpression = function(){
    console.log("Hello form greeting Expression");
}

greetingExpression();



//Create a function that, when invoked, lists out the numbers 1-10
// Use a for - Loop
// Create A Function
// Don't forget to call the function

displayNumbers();

function displayNumbers(){
    for (let i = 1; i <=10; i++){
        console.log(i)
    }    
}


// PARAMETERS
// Function parameters are place holders for data that we pass into a function when calling or 'invoking' the
// function

function studentGreeting(name){
    console.log(`Greeting ${name}`)
}

studentGreeting("Marcus");
studentGreeting("Christina");

/*
-Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        -
*/

function dynamicGreeting(firstName, lastName){
    let fullName = `${firstName} ${lastName}`
    console.log(`Hello my name is ${fullName}`)
}

dynamicGreeting("Marcus", "Elliott");

//Functions that 'return' things
function area(length, width){
    let areaCalc = length * width;
    return areaCalc;
}

let area1 = area(4, 10);
let area2 = area(2, 6);
console.log(area1);
console.log(area2);


//Challenge
function volumeValue(length, width, height){
    let volumeCalc = length * width * height;
    return volumeCalc;
}

let volumeOutput = volumeValue(5, 5, 5);
console.log(`Volume of Cuboid is: ${volumeOutput}`);



//Challenge
function ageConverter(dogAge){
    let ageCalc = (dogAge - 2) * 4 + 21;
    return ageCalc;
}

let ageOutput = ageConverter(5);
console.log(`Dog Age to Human Age conversion = ${ageOutput}`)

