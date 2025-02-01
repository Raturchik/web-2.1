//1
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

//1432
//15423
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

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve("Data fetched succesfully");
            }
            else{
                reject('Failed to fetch data');
            }
        }, 2000);
    });
}
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error());

async function fetchData(){
    try{
        let data = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.5){
                    resolve("Data fetched succesfully");
                }
                else{
                    reject('Failed to fetch data');
                }
            }, 2000);
        });
        console.log(data);
    } catch (error){
        console.error(error);
        
    }
}
fetchData();