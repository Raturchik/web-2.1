// // //1
// // let array1 = [1, 2, 3, 4, 5];
// // array1.splice(1,1);
// // array1.push(6);
// // console.log(array1);
// // //2
// // let arrayOfInt = [1, 2, 3, 4, 5];
// // let sum = 0;
// // function arraySolving(arr1){
// //     for (let number of arr1){
// //         sum += number;
// //     }
// //     return sum;
// // }
// // arraySolving(arrayOfInt);
// // console.log(sum);
// // let array2 = [1, 2, 3, 4, 5];
// // let array2Clone = array2.slice(1,4);
// // console.log(array2Clone);
// // //3
// // let array3 = [1, 2, 3, 4, 5];
// // let array3c = [6, 7, 8, 9, 10];
// // let array3Concat = array3.concat(array3c);
// // console.log(array3Concat);
// // //4
// // let array4 = [1, 2, 3, 4, 5];
// // array4.forEach((item) => console.log("Элемент массива:", item));
// // //5 не работает =(
// // let array5 = [1, 2, 3, 4, 5, 3, 6, 7, 8];
// // let array5Clone = array5.indexOf(array5.forEach(((item) => item == 3)));
// // console.log(array5Clone);
// // //6
// // let array6 = [1, 2, 3, 4, 5];
// // console.log(array6.includes(3));
// // // 7
// // let array7 = [1, 2, 3, 4, 5];
// // console.log(array7.find(item => item > 3));
// // //8
// // let array8 = [1, 2, 3, 4, 5];
// // let array8Clone = array8.splice(array8.findIndex(item => item > 3));
// // console.log(array8Clone);
// // //9
// // let array9 = [1, 2, 3, 4, 5];
// // let array9Clone = array9.slice(array9.findIndex(item => item > 3));
// // console.log(array9Clone);

// // приколы 🙄🥱😮
// // //1
// // let array21 = [1, 2, 3, 4 ,5];
// // array21Clone = array21.map(item => item * 2);
// // console.log(array21Clone);
// // //2
// // let array22 = [3, 1, 4, 1, 5, 9, 2, 6];
// // console.log(array22.sort());
// // //3
// // let array23 = ['hello', 'world'];
// // console.log(array23.reverse());
// // //4
// // let array24 = 'apple,banana,cherry'.split(',');
// // console.log(array24);
// // //5
// // let array25 = ['hello', 'world'];
// // let str = array25.join(' ');
// // console.log(str);

// // //6
// // let array26 = [1, 2, 3, 4, 5];
// // let result  = array26.reduce((acc, current) => acc * current);
// // console.log(result);

// //1
// let map = new Map();
// map.set(1, "popo");
// map.set(2, "papo");
// map.set(3, "popa");
// console.log(map.get(1));
// console.log(map.has(3));
// map.delete(2);
// console.log(map);

// //2
// let set = new Set();
// let lol = { name: "kavo"};
// let lol2 = { name: "chavo"};
// let lol1 = { name: "zachto"};
// set.add(lol);
// set.add(lol1);
// set.add(lol2);
// set.add(lol2);
// set.add(lol1);
// set.add(lol);
// alert(set.size);
// alert(set.has(lol));
// console.log(set);
// set.clear;
// console.log(set);

// тут дз 
//1
// const data = new Date();
// alert(data);
// //2
// const time = new Date();
// const hours = time.getHours();
// const minutes = time.getMinutes();
// const seconds = time.getSeconds();
// console.log(`Сейчас:${hours}:${minutes}:${seconds}`);
// //3
// const data3 = new Date();
// const year = time.getFullYear();
// const month = time.getMonth();
// const day = time.getDay();
// const hours3 = time.getHours();
// const minutes3 = time.getMinutes();
// const seconds3 = time.getSeconds();
// console.log(`Сегодня:${day}-${month}-${year}; ${hours}:${minutes}:${seconds}`);
//4
const data4 = new Date();

const dataOld4 = new Date();
console.log(data4.getDay());
