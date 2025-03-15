//Q.1 prompt the user to enter their full name. generate a user name for them based on the input .
//start username with @ , followed by their fullname and ending with the fullname length:
//eg: user name="tilakmadal", username should be ""@tilakmandal11"
let fullName=prompt("enter your full name without spaces:");
let length=fullName.length;
userName="@"+fullName+length;
console.log(userName);