let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj){
    for(key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty(lal = {lol: "dsd"}));


let salaries = {
    john: 100,
    ann: 160,
    pete: 130,
}
let sum = salaries.john + salaries.ann + salaries.pete
for(key in salaries){
    alert(sum);
}
alert(0)

let obj = {
    am: 10,
    em: 20,
    om: 30,
};
function multiplyNumeric(obj){
    for(key in obj){
        if(key = Number){
            alert(key * 2)
        }
    }
    alert("Пусто!");
}
multiplyNumeric(obj);