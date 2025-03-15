function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve ("success");
        }, 4000);
    });
}

console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});




// const getPromise =() =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//         reject("error");
//     });
// };

// let promise= getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("promise rejected",err);
// });




// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };

// let result=getData(39);
// console.log(result);