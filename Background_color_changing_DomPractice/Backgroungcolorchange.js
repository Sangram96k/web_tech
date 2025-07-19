let toggle = document.querySelector(".toggle");
let color = document.querySelector(".color-code");

toggle.addEventListener('click',()=>{
let random = getrandom()
document.body.style.backgroundColor=random;
color.textContent=random;

})

function getrandom(){
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6,"0")}`;
}