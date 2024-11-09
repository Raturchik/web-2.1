//     },
// const original = {
//     a: 1,
//     b:{
//         c:2,
//     }
// };

// function shallowClone(clone){
//     for(let key in original){
//         clone[key] = original[key];
//     }
//     return clone;
// }

// const clone = shallowClone(original);
// console.log(clone);
// clone.b.c = 3;
// console.log(original);

// let rectangle = {
//     width: 10,
//     height: 5,
//     getArea(){
//         return this.width * this.height;
//     },
//     getPerimetr(){
//         return (this.width + this.height) * 2;
//     },
// }

// let account = {
//     balance: 0,
//     deposit(amount){
//         return amount + this.balance;
//     },
//     withdraw(amount){
//         return this.balance - amount;
//     },
//     getBalance(){
//         return this.balance;
//     }
// };
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimetr());
// console.log(account.deposit(5));
// console.log(account.withdraw(5));
// console.log(account.getBalance(5));

// тут дзшка+
// let person = {
//     name: 'John',
//     age: 28,
//     greet(){
//         alert("Hello " + this.name);
//     },
//     haveBirthday(date){
//         date = prompt("what day is today?");
//         if(date === "15.11"){
//             alert("Happy birthday!");
//             this.age++;
//             console.log(this.age);
//         }
//         else{
//             alert("the time has not come yet");
//             console.log(this.age);
//         }
//     }
// }
// person.greet();
// person.haveBirthday();

// let counter = {
//     count: 0,
//     increment(){
//         this.count++;
//         console.log(this.count);
//     },
//     decrement(){
//         this.count--;
//         console.log(this.count);
//     },
//     reset(){
//         this.count = 0;
//         console.log(this.count);
        
// }

// counter.increment();
// counter.decrement();
// counter.reset();

// let settings = {
//     userName: "", 
//     value: "",
//     setProperty(userName, value){
//         userName = prompt("Укажите имя свойства: ");
//         if(settings.hasOwnProperty("userName") === true){
//             this.userName = userName;
//         }
//         else{
//             alert("Такого параметра не существует");
//         }
//         value = prompt("Укажите значение свойства:");
//         if(settings.hasOwnProperty("value") === true){
//             this.value = value;               
//         }
//         else{
//             alert("Такого параметра не существует");
//         }
//     },
// };
// settings.setProperty();
// console.log(settings);

// МАССИВЫ
let arrayOfInt = [1, 2, 3, 4, 5];
console.log(arrayOfInt);
console.log(arrayOfInt[2]);
console.log(arrayOfInt[0]);
console.log(arrayOfInt.at(0));
console.log(arrayOfInt.shift());

let arrayOfStr = ["apple","banana", "orange"];
console.log(arrayOfStr);

let arrayOfObj = [{name: "John",}, {name: "Alice",}, {name: "Bob",}];
console.log(arrayOfObj);

console.log(Array.of("hello", "world", "js"));

function arrSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        alert(sum += array[i]);
    }
}
arrSum([1, 2, 3, 4, 5])