//Q.1 for a given array with marks of students ->[85,97,44,37,76,60] . find the average marks
//of the entire class
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0; i<marks.length; i++){
    sum=sum+marks[i];
}
let average=sum/marks.length;
console.log("the average mark of student is:",average);

//Q.2 for a given array with prices of 5 items->[250,645,300,900,50] all items have an offer of
//10% OFF on them. change the array to store final price after applying offer.
let price=[250,645,300,900,50];
for( let i=0; i<price.length; i++){
    let discount=price[i]/10;
    let finalCost=price[i]-discount;
    console.log("final cost after discount is:",finalCost);
}

//Q.3 create an array to store companies ->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//A) remove the first company from the array 
//B)Remove Uber & add Ola in its place
//Add Amazon at the end
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift(); 
// console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
