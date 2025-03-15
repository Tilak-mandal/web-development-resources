//Q.1 print all even numbers from 0 to 100
for(let num=0; num<=100; num++){
    if(num%2===0){
        console.log(num);
    }
}

//Q.2 create a game where you start wit any random game number . ask the user to keep guessing the game 
//until the user enters correct value
let gameNum=25;
let userNum=prompt("guess the game number:");
while(userNum != gameNum){
userNum=prompt("your guess is wrong. Guess again:");
 }
console.log("congratulations! you entered the right number");