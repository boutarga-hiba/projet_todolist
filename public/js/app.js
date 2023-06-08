let input1 = document.querySelector(".contenu_input")
let btn_add = document.querySelectorAll(".send_boite");
let contenu1 = document.querySelector(".contenu_boite");
let para = document.querySelector(".para");

console.log(contenu1.firstElementChild.firstElementChild);
// * btn delete 

let btn_delete =document.querySelectorAll(".delete");
// * btn update
let btn_modifier = document.querySelector(".update");

// *list 
let filterOption = document.querySelector(".selection");

console.log(input1,btn_add,contenu1);


for (let i = 0; i < btn_add.length; i++) {
    let element = btn_add[i];
    const add_boite = ()=>
{
if(input1.value.trim() === "")
{
    alert("please enter something");
    
}
if (input1.value.length == "")
{
alert("please write something")
}

// * si l input est n'est pas vide 
if (input1.value != "") {

let paragraphe = document.createElement("div");

paragraphe.classList.add("item");
paragraphe.innerHTML = `<p>${input1.value}</p>
<div class="item-btn">
<i class="add_green fa-solid fa-check"></i>
<i class="delete fa-solid fa-trash"></i>
<i class="update fa-solid fa-pencil"></i>
</div>
`

// insere le paragraphe dans l element contenu 
contenu1.appendChild(paragraphe);
 }
// * vider l input 
input1.value="";

}
element.addEventListener("click",add_boite)

}


// * btn_delete


contenu1.addEventListener("click",(element)=>
{
if(element.target.classList.contains(`delete`))
{
    element.target.parentElement.parentElement.remove();
}
});


// * btn modifier

// coftenu1.addEventListener("click",(element)=>
// {
// if(element.target.classList.contains(`update`))
// {
// //     console.log(element.parentElement.previousElementSibling);
// console.log(contenu1.children[0]);
// }
// });
contenu1.addEventListener("click",(element)=>
{
if(element.target.classList.contains(`update`))
{
    let divparent = element.target.parentElement.parentElement
    let paragraph = divparent.firstElementChild
console.log(paragraph);
let ask = prompt("Modifiez s'il vs plait");
paragraph.textContent = ask;
}
});


// * green
contenu1.addEventListener("click",(element)=>
{
    if(element.target.classList.contains(`add_green`))
    {
        let div_green = element.target.parentElement.parentElement;
        div_green.style.backgroundColor="green";
        console.log(div_green);
    }
})

// * fin exo 

// function filterTodo(e) {
//     let todos = contenu1.childNodes;
// console.log(todos);
// todos.forEach(function(todo){
//     switch (e.target.value) {
//         case "all":
//             todo.style.display="flex"
            
//             break;
    
//         default:
//             break;
//     }
// })
// }

// filterOption.addEventListener("click",filterTodo);
// console.log(contenu1.childNodes);







