"use strict"
//1
let name = "John";
function sayHi(){
    alert("Hi, " + name)
}
name = "Pete";
sayHi();
//Pete
//2
// let phrase = "Hello";
// if(true){
//     let user = "John";
//     function sayHI(){
//         alert(`${phrase}, ${user}`);
//     }
// }
// sayHI();
// Hello, John 
// use strict = ошибка 
//3
function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
alert( counter2() ); // 0
alert( counter2() ); // 1

//4
function sum(){
    
}
sum(a)(b);