let toggle = document.querySelector(".toggle");
let color = document.querySelector(".color-code");

toggle.addEventListener('click',()=>{
let random = getrandom()
document.body.style.backgroundColor=random;  //.style.backgroundColor accept string value like "red" etc 
                                             //because of that we has to convert the random  hex code  to string 
 color.textContent=random;

})

function getrandom(){
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6,"0")}`; //hex.padStart(6, "0") means:
                                    //👉 If the string is less than 6 characters,
                                    //  add "0" to the start until 
                                    // it becomes 6 characters long.
}