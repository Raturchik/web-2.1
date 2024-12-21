// //1
// let elem = document.querySelector("#elem");
// function clear(elem){
//     while(elem.hasChildNodes()){
//         let firstChild = elem.firstElementChild;
//         firstChild.remove();
//     }
// }
// clear(elem);
//2
// let li = document.querySelector('#one');
// li.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>'); // 1 способ
let ul = document.querySelector("#ul"); // 2 способ
let li1 = ul.firstElementChild;
let li2 = ul.lastElementChild;
let li3 = document.createElement('li');
li3.innerText = '2';
let li4 = document.createElement("li");
li4.innerText = '3';
li1.after(li3);
li2.before(li4);

//3
let div = document.querySelector(".searchBarContent");
div.style.backgroundColor = "#f5f5f5";
//4
let divNotf = document.querySelector('.notification');
divNotf.style.display = "flex";
divNotf.style.width = "100%";
divNotf.style.flexDirection = "column";
console.log(getComputedStyle(divNotf));
