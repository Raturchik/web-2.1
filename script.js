//1
// function changeText(){
//     document.getElementsByTagName('button').textContent = "Нажми на меня";
// }
let but = new Array();
but.forEach(but => {
    but.getElementsByTagName("button").textContent = "Нажми на меня";
});
//другого способа не нашел((
//2
let container = document.getElementsByClassName("container");
container.className = "active";
console.log(container.className);
//3
let parent = document.getElementById("parent");
let potomki = parent.getElementsByTagName("*");
console.log(potomki.length);
//4
let target = document.getElementsByClassName('target');
let prevSibling = target.previousSibling;
let nextSibling = target.nextSibling;
console.log(prevSibling, nextSibling);
//undefiend??