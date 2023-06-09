// * 1recuperation 
let contenu_input2 = document.querySelector(".contenu_input2");
let send_boites = document.querySelectorAll(".send_boites");
let contenu_para2=document.querySelector(".todo");
let contenu_para3=document.querySelector(".doing");

let paragraphe = document.querySelector(".para2")

let selection2 = document.querySelector(".selection-trillo");
// * log 
console.log(contenu_input2,send_boites,contenu_para2);

//* btn modifier supprimer
btn_modifier=document.querySelector(".update2");
btn_supprimer=document.querySelectorAll(".delete2");

// * 2 la methode d 'ajout
// * recuperer la valeur de l'input ...


for (let i = 0; i < send_boites.length; i++) {
    let element = send_boites[i];
    const verify =()=>
    {
        if(contenu_input2.value.length == "")
        {
            alert("Ecrivez quelque chose")
        }
        if(contenu_input2.value!="")
        {
            let para2 = document.createElement("div");
            para2.classList.add("item-2");
            para2.innerHTML=`
           
            <p class="para2">${contenu_input2.value}</p>

            <div class="icones">
            <i class="delete2 fa-solid fa-trash" style="color: red;"></i>
            <i class="update2 fa-solid fa-pencil " style="color: blue;"></i> 
            <select name="" id="" class="selection-trillo">
                <option value="">TODO</option>
                <option value="">DOING</option>
                <option value="">DONE</option>
            </select>
            </div> `;
            contenu_para2.appendChild(para2);
            contenu_input2.value="";

        }
    }
    element.addEventListener("click",verify)

}
//& suppression
contenu_para2.addEventListener("click",(element_supp)=>
{
    if(element_supp.target.classList.contains(`delete2`))
    {
        if(confirm("Vous voulez vraiment supprimez ?")==true)
        {
            element_supp.target.parentElement.parentElement.remove();
       
        }
    }
});

// & modifivcation
contenu_para2.addEventListener("click",(element_modifier)=>
{
    if(element_modifier.target.classList.contains(`update2`))
    {
        if(confirm("Vous voulez vraiment modifiez ?")==true)
        {

            let paragraph2 = element_modifier.target.parentElement.parentElement.firstElementChild;
            let ask = prompt("Modifiez");
            paragraph2.textContent = ask;

        }
    }
});

// * selection 


function filterTodos(e) {
}






