/*
SCOPE
global - scoped globally (Think about Earth);
locally - scoped locally (Think Indianapolis)


//Scope tracks variables that are local or global. These variables can be referenced later. If that variable
//is not "in there current scope", we can't use it.
*/

let x = "declared outside of the function";

function exampleScope() {
    let x = "declared inside the function"; //declaring a new variable of x
    console.log(x);
    console.log("we are inside the function");
}

exampleScope();
console.log(x, "This is line 18");

//example2
let color = "blue"

function skyColor(){
    color = "pink"; //re-initializing 
    console.log(color);
}

skyColor();
console.log(color);

/*
    VAR - scoped to the nearest function block
    LET - scoped to the nearest enclosing block
    CONST - cannot be reinitialized
*/
var color= "blue";

function skyColor(){
    var color = "pink";
    if(1 == 1){
        var color = "purple";
        console.log(color); //purple
    }
    console.log(color);
}

skyColor();
console.log(color); //blue
//VAR is scoped to the nearest function block of code

//LET 
let color = "blue";

function skyColor(){
    let color = "pink";
    if(1 == 1){
        let color = "purple"
    }
    console.log(color);
}

skyColor(); //blue
console.log(color);
//The main reason that we let is so that we don't have to worry about any bleeding/scope creeping in our functions/conditionals