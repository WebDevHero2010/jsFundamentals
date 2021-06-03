// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let fb = 15;

if (fb % 3 === 0 && fb % 5 === 0) {
    console.log('Fizz Buzz');
}else if(fb % 5 === 0 ){
    console.log('Buzz');
}else if(fb % 3 === 0 ){
    console.log('Fizz');
}else {
    console.log('Number is not divisable by 3 or 5');
}

let FB = 30;

switch (true){
    case 'Fizz Buzz':(FB % 3 === 0 && FB % 5 === 0);
        console.log('Fizz Buzz');
        break;
    case 'Buzz':(FB % 5 === 0);
        console.log('Buzz');
        break;
    case 'Fizz':(FB % 3 === 0);
        console.log('Fizz');
        break;
    default:
        console.log('Number is not divisible by 3 or 5');
}

let FB = 30;

//ternaries
FB % 3 === 0 && FB % 5 === 0 ? console.log('Fizz Buzz') :
FB % 5 === 0 ? console.log('Buzz') :
FB % 3 === 0 ? console.log('Fizz') :
console.log('Number is not divisible by 3 or 5');
