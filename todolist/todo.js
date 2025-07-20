let input = document.querySelector(".task-input");
let btn = document.querySelector(".add-task");
let list = document.querySelector(".task-list")
btn.addEventListener('click',()=>{
    let texttask = input.value;
    console.log(texttask);

    if (texttask==="") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = texttask;

    let debtn = document.createElement("button");
span.addEventListener('click',()=>{
    span.classList.toggle("completed")// here insted of add we are using toggle because 
    // what toggle does is that if the .completed class is present for the span element 
    //then it will remove it and if it does not has it then it add it to element 
})
    debtn.addEventListener('click',()=>{
    li.remove();
})
    debtn.style.marginLeft="10px";
    debtn.textContent = "Delete";
    li.appendChild(span);
    li.appendChild(debtn);
    list.appendChild(li);

    input.value="";

})


