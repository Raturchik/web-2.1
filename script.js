// 1
// function greet(){
//     alert("Hello, World!");
// }
// setTimeout(greet, 3000);
// let count = 0;
// function plusOne(){
//     console.log(count++);

//     if(count > 10){
//         clearInterval(id);
//     }
// }
// let id = setInterval(plusOne, 1000);0

// 1432
// 15423
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

// console.log("1");
// setTimeout(() => {
//     console.log("2"); 
//     Promise.resolve().then(() => console.log("3"), 0)
// });
// Promise.resolve().then(() => console.log("4"));
// console.log("5");

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.random() > 0.5){
//                 resolve("Data fetched succesfully");
//             }
//             else{
//                 reject('Failed to fetch data');
//             }
//         }, 2000);
//     });
// }
// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error());

// async function fetchData(){
//     try{
//         let data = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if(Math.random() > 0.5){
//                     resolve("Data fetched succesfully");
//                 }
//                 else{
//                     reject('Failed to fetch data');
//                 }
//             }, 2000);
//         });
//         console.log(data);
//     } catch (error){
//         console.error(error);

//     }
// }
// fetchData();

// let promise = new Promise((resolve) => {
//     resolve("Hello World!");
// });

// promise.then((value) => (
//     console.log(value)
    
// ));

// let promise1 = new Promise((resolve, reject) => {
//     reject("Something went wrong");
// });

// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// Promise.allSettled([
//     new Promise((resolve) => setTimeout(resolve("Промис 1 выполнен"), 1000)),
//     new Promise((resolve, reject) => setTimeout(reject("Промис 2 отклонен"), 2000)),
//     new Promise((resolve) => setTimeout(resolve("Промис 3 выполнен"), 3000)),
// ]).then((values) => console.log(values));   


// let promise1 = new Promise((resolve) => setTimeout(resolve("Промис 1 выполнен"), 1000));
// let promise2 = new Promise((resolve, reject) => setTimeout(resolve("Промис 2 отклонен"), 2000));
// let promise3 = new Promise((resolve) => setTimeout(resolve("Промис 3 выполнен"), 3000));

// let allPromises = [promise1, promise2, promise3];

// Promise.allSettled(allPromises).then((promisesData) => {
//         promisesData.forEach((item, index) => {
//             console.log(`Promise ${index + 1}: ${item.status} - ${item.values || item.reason}`); 
//         });
//     });

// Promise.all(allPromises).then((data) => console.log(data));
// Promise.race(allPromises).then((data) => console.log(data));

async function delay(milliseconds) {
    return new Promise(resolve => setTimeout(() => {
     resolve()    
    }, milliseconds))
    
}

async function runDelay() {
    await delay(2000);
    console.log("Задержка завершена");
}

runDelay()