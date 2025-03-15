function getData (dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000);
    });
}

//Async-await --> function should be called  to execute
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}

getAllData();

//iife --> function execute directly without calling (not much important)
(async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
})();
