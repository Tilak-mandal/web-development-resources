//Q.1 create a new button element . Give it a text "click me",background color of red & text color 
//of white.
//insert the button as the first element inside the body tag.

let button=document.createElement("button");
button.innerText="click me";
button.style.backgroundColor="red";
button.style.color="white";

let body=document.querySelector("body");
body.prepend(button);

//Q.2 Create a <p> tag in html, give it a class and some styling .
//Now create a new class in CSS and try to append this class to the <p> element.
//Did you notice, how you write the class name when you add a new one?
//Solve this problem using classlist.

let para=document.querySelector("p");
//para.setAttribute("class","newClass");
para.classList.add("newClass");
//para.classList.remove("newClass");
