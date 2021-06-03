/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through to be iterable -- that means it needs to be
//numbered

//in does not require that thing you loop through be numbered

//let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

//for (item of student){
 //   console.log(item);
//}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}