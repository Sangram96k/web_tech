// to avoid using multiple event listener we will be using event delegation


let container = document.getElementsByClassName("para")
//here there are multiple para but i used only one listener 
// it is possible if the action/event is same
function Clicked(e) {

    if(e.target.classList.contains("para"))
    {
        console.log(e.target.textContent);
        alert("Para clicked the para name is :"+e.target.textContent);

    }
    
}

for(let containers of container)
{
    containers.addEventListener('click',Clicked);

}
