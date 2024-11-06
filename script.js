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
let person = {
    name: 'John',
    age: 28,
    greet(){
        alert("Hello " + this.name);
    },
    haveBirthday(date){
        date = prompt("what day is today?");
        if(date === "15.11"){
            alert("Happy birthday!");
            this.age++;
            console.log(this.age);
        }
        else{
            alert("the time has not come yet");
            console.log(this.age);
        }
    }
}
person.greet();
person.haveBirthday();

let counter = {
    count: 0,
    increment(){
        this.count++;
        console.log(this.count);
    },
    decrement(){
        this.count--;
        console.log(this.count);
    },
    reset(){
        this.count = 0;
        console.log(this.count);
        
    },
}

counter.increment();
counter.decrement();
counter.reset();