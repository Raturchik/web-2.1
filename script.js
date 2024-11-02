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
let sum = 0;
for(key in salaries){
    alert(sum += salaries[key]);
}
alert(0)

let obj = {
    am: 10,
    em: 20,
    om: 30,
    popds: "dsds"
};
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            alert(obj[key] *= 2);
        }
        else if(typeof obj[key] == 'string'){
            alert(obj[key]);
        }
        else{
            alert("Пусто!");
        }
    }
}
multiplyNumeric(obj);