// // 1
// let arrayOfStr = ['слово','word','yryry'];
// function arrayPush(arr){
//     return arr.push("hello");
// }
// arrayPush(arrayOfStr);
// console.log(arrayOfStr);
// //2
// let arrayOfInt = [1, 2, 3, 4, 5];
// let sum = 0;
// function arraySolving(arr1){
//     for (let number of arr1){
//         sum += number;
//     }
//     return sum;
// }
// arraySolving(arrayOfInt);
// console.log(sum);
// //3

// let sum1 = 0;
// function sumInput(){
//   let arr = [];
//   for (i = 0; i < arr.length; i++){
//     arr[i] = prompt("Insert value");
//   };
//     if(arr[i] != Number && arr[i] === "" && arr[i] === undefined){
//       alert("Inserted value is not a number!");
//       return;
//     }    
//     sum1 += arr[i];
//     return sum1;
// }
// sumInput();
// console.log(sum1);

// УРОК №2 (Задачи😍🥰)
//1
let array1 = [1, 2, 3, 4, 5];
array1.splice(1,1);
array1.push(6);
console.log(array1);
//2
let array2 = [1, 2, 3, 4, 5];
let array2Clone = array2.slice(1,4);
console.log(array2Clone);
//3
let array3 = [1, 2, 3, 4, 5];
let array3c = [6, 7, 8, 9, 10];
let array3Concat = array3.concat(array3c);
console.log(array3Concat);
//4
let array4 = [1, 2, 3, 4, 5];
array4.forEach((item) => console.log("Элемент массива:", item));
//5
let array5 = [1, 2, 3, 4, 5, 3, 6, 7, 8];
let array5Clone = array5.forEach(array5.indexOf(((item) => item == 3)));
console.log(array5Clone);

//6
let array6 = [1, 2, 3, 4, 5];
console.log(array6.includes(3));
// 7
let array7 = [1, 2, 3, 4, 5];
console.log(array7.find(item => item > 3));
//8
let array8 = [1, 2, 3, 4, 5];
let array8Clone = array8.splice(array8.findIndex(item => item > 3));
console.log(array8Clone);
//9
let array9 = [1, 2, 3, 4, 5];
let array9Clone = array9.slice(array9.findIndex(item => item > 3));
console.log(array9Clone);
