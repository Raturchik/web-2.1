//1
let deleteButton = document.querySelector(".deleter");
let divDeleted = document.querySelector(".invisible");

function deleteDiv(){
    divDeleted.classList.toggle("open");
}

deleteButton.addEventListener("click", deleteDiv);
//2
let hideButton = document.querySelector(".hide");

function hide(){
    hideButton.style.display = 'none';
}

hideButton.addEventListener("click", hide);

let list = document.querySelector(".list");
//popo
let selectedLi;
function fs(){
    
}