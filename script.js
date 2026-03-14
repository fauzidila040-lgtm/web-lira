js.script
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
menu.classList.toggle("active");
});


// FAQ TOGGLE

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{
item.addEventListener("click",()=>{

let answer = item.querySelector(".answer");

answer.style.display =
answer.style.display === "block"
? "none"
: "block";

});
});


// READ MORE ABOUT

function showInfo(){

let info = document.getElementById("more-info");

if(info.style.display === "block"){
info.style.display = "none";
}else{
info.style.display = "block";
}

}


// TYPING ANIMATION

const text = ["Student"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,200);

}

type();