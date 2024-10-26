let user = {
    name: "John",
    surname: "Smith",  
};
user.name = "Pete";
delete user.name;

function isEmpty(obj){
    for(key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty(lal = {fd: "saf"}));


let salaries = {
    // john: 100,
    // ann: 160,
    // pete: 130,
}
// let sum = salaries.john + salaries.ann + salaries.pete
// for(let key in salaries){
//     alert(sum);
// }
// for( in salaries){

// }
