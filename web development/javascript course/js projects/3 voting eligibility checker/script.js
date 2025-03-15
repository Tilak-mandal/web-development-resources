let age = document.querySelector("#age");
let result = document.querySelector("#result");
let btn = document.querySelector("button");

const checkEligibility = () =>{
    if (age.value <= 18){
        result.innerText = "you cannot vote";
        result.style.color="red";
    }
    else if (age.value > 18){
        result.innerText = "you can vote";
        result.style.color = "Green";
    }
    else{
        result.innerText = "Please enter the valid number";
    }
};

btn.addEventListener("click",checkEligibility);