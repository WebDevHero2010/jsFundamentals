/* 
BRONZE - 
Connect your js file to your html file.
In your html file, create an h1 element with an id of "title".
In your js file, grab your h1 element by its id. 
In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".
Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/

//grabs the h1 element by id: title
let title = document.getElementById("title");

//Javascript inserts text into HTML element via getElementID
document.getElementById("title").innerText = "This is my Todo List:"

//styles h1 element by id(title) with Hex Color #------
document.getElementById("title").style.color = "#A9A9A9";

/* 
SILVER - 
In your html file, create a div element underneath your h1 element
with an id of "div".
In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph
text to: "#6495ED". Nest the paragraph element inside the div
element.
*/

//grab div element
let div = document.getElementById("div");
//create paragraph element
let para = document.createElement("p");

para.innerText = "Lorem ipsum";

para.style.color="#6495ED";
//append to insert
div.append(para);
/* 
GOLD - 
In your html file underneath your div element, create an unorganized list
element with an id of "list".
In your js file, grab your ul element by its id. 
Create an array in your js file with 4 different items for your to-do
list. 
Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append 
the li element to the ul element of "list".
*/
let list = document.getElementById("list");
let arr = ['Do homework', 'Sleep', 'Play Guitar', 'Watch Youtube'];


arr.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.append(li);
});


