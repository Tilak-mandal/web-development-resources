//Q.1 create a H2 heading element with text -"Hello javascript". append "from Apna College students"
//to this text using js.

let h2=document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText+ " from Apna College students";

//Q.2 create 3 divs with common class name-"box". Access them and add some unique text to each of them.

let divs=document.querySelectorAll(".box");

for(i=0; i<divs.length; i++){
    divs[i].innerText=`new unique element ${i+1}`;
}