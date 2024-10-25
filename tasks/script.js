// // //1
// // let num = prompt("Insert your number: ");
// // if(num % 2 == 0){
// //     alert("Чётное");
// // } 
// // else{
// //     alert("Нечётное");
// // }
// // //2
// // let num1 = prompt("Insert first number: ");
// // let num2 = prompt("Insert second number: ");
// // if(num1 === num2){
// //     alert("равны")
// // }else if(num1 > num2){
// //     alert("первое число больше второго")
// // }else{
// //     alert("второе число больше первого")
// // }
// // //3
// // let login = prompt("Insert login");
// // let password = prompt("Insert password");
// // if(login === "pop" && password === "123"){
// //     alert("Access granted");
// // } else{
// //     alert("Access denied. Wrong login or password");
// // }

// //second slide #1
// let n = prompt("Insert n: ");
// let sum = 0;
// // while(){

// // }
// //2
// for(b = 0; b < 10;){
//     alert((++b) * 3);
// }
// //3
// let number1 = prompt("Insert first number: ");
// let number2 = prompt("Insert second number: ");
// let number3 = prompt("Insert third number: ");
// if(number1 > number2 && number3){
//     alert("First Number")
// }
// else if(number2 > number1 && number3){
//     alert("Second Number")
// }
// else if(number3 > number1 && number2){
//     alert("Third Number");
// }
// else{
//     alert("what the heeeeeeeeeeeeeeeeeeeeeeeeeeeeell🤯")
// }

// // 4
// for(i = 0; i <= 20; i++){
//     let g = i % 3 == 0;
//     if(i % 3 == 0){
//         alert(i);
//     }
// }
// //5
// do {
//     let userNum = prompt("Insert num: ");
//     if(userNum > 0){
//         alert(userNum ** 2);
//     } 
//     else if(userNum < 0){
//         alert("Insert another num");
//     }
//     else{
//         alert("this is 0. Try again");
//     }
// }while(userNum <= 0)
//цикл не начинается заново, почему??
// 6
// let day = prompt("Insert number between 1 and 7: ");
// switch(day){
//     case "1":
//         alert("It's Monday!");
//         break;
//     case "2":
//         alert("It's Tuesday!");
//         break;
//     case "3":
//         alert("It's Wednesday!");
//         break;
//     case "4":
//         alert("It's Thursday!");
//         break;
//     case "5":
//         alert("It's Friday!");
//         break;
//     case "6":
//         alert("It's Saturday!");
//         break;
//     case "7":
//         alert("It's Sunday!");
//         break;
//     default:
//         alert("woah");
//         break;
// }
// // 3-ий слайд
// //1
// function greet(name){
//     name = prompt("What's your name?");
//     alert(`Hello, ${name}!`)
// }
// greet();
// //2
// function sum(a, b){
//     a = prompt("Insert num a:");
//     b = prompt("Insert num b:");
//     alert(+a + (+b));
// }
// sum();
//3
function circleArea(r){
    r = prompt("Insert radius value: ");
    let area = Math.PI * (`${r}` ** 2);
    alert("Circle area is: ~" + Math.round(area)); 
}
circleArea();
// 4
function isEven(n){
    n = prompt("Введите число:")
    if(n % 2 == 0){
        alert("четное😘");
    }
    else if(n === null && n === NaN && n === undefined){
        alert("Я ХОЧУ ЧИСЛО");
    }
    else{
        alert("Я хочу чётное число!!!");
    }
}
console.log(typeof(n));

isEven();
// 5
function convertTemperature(c){
    c = prompt("Insert temo in Celsium: ");
    alert('Here is value in Fahrenheits: ' +((`${c}` * (9/5)) + 32));
}
convertTemperature();