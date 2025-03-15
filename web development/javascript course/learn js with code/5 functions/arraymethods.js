//Q.3 for a given array of numbers , print the square of each value using the forEach loop
let nums=[1,2,3,4,5];
nums.forEach((num)=>{
    console.log(num*num);
});

//Q.4 we are given array of marks of students . filter out of the marks of students that scored 90+
let marks=[87,93,64,99,86];
let toppers=marks.filter((val)=>{
    return val>90;
});
console.log(toppers);

//take a number n as ininput from user. create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce metod to calculate product of all numbers in array.
let n=5;
let arr=[];
for (let i=1; i<=n; i++){
    arr[i-1]=i;
}

console.log(arr);

let sum=arr.reduce((res, curr)=>{
    return res+curr;
});

console.log("sum=",sum);

let factorial=arr.reduce((res, curr)=>{
    return res*curr;
});

console.log("factorial=",factorial);