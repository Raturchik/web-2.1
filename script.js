// 1
// let arrayOfStr = ['слово','word','yryry'];
// function arrayPush(arr){
//     return arr.push("hello");
// }
// arrayPush(arrayOfStr);
// console.log(arrayOfStr);
//2
let arrayOfInt = [1, 2, 3, 4, 5];
let sum = 0;
function arraySolving(arr1){
    for (let number of arr1){
        sum += number;
    }
    return sum;
}
arraySolving(arrayOfInt);
console.log(sum);
//3

let sum1 = 0;
function sumInput(){
  let arr = [];
  for (i = 0; i < arr.length; i++){
    arr[i] = prompt("Insert value");
  };
    if(arr[i] != Number && arr[i] === "" && arr[i] === undefined){
      alert("Inserted value is not a number!");
      return;
    }    
    sum1 += arr[i];
    return sum1;
}
sumInput();
console.log(sum1);
