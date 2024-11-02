const original = {
    a: 1,
    b:{
        c:2,
    }
};

function shallowClone(clone){
    for(let key in original){
        clone[key] = original[key];
    }
    return clone;
}

const clone = shallowClone(original);
console.log(clone);
clone.b.c = 3;
console.log(original);

let rectangle = {
    width: 10,
    height: 5,
    getArea(){
        return this.width * this.height;
    },
    getPerimetr(){
        return (this.width + this.height) * 2;
    },
}

let account = {
    balance: 0,
    deposit(amount){
        return amount + this.balance;
    },
    withdraw(amount){
        return this.balance - amount;
    },
    getBalance(){
        return this.balance;
    }
};
console.log(rectangle.getArea());
console.log(rectangle.getPerimetr());
console.log(account.deposit(5));
console.log(account.withdraw(5));
console.log(account.getBalance(5));