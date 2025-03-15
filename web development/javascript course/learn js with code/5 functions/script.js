//Q.1 Create a function using the "function" keyword that takes a string as an argument & returns 
//the number of vowels int he string.
function countVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count=count+1;
        }
    }
    return count;
}
let count=countVowels("apnacollege");
console.log(count);

//Q.2 Create an arrow function to perform the same task
const countVow=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count=count+1;
        }
    }
    console.log(count);
}
countVow("tilakmandal");

