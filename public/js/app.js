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
let selection = document.querySelector(".selection");
let item = document.querySelector(".item");

let tab = [];
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
<i class="add_green fa-solid fa-check" style="color: green;"></i>
                <i class="delete fa-solid fa-trash" style="color: red;"></i>
                <i class="update fa-solid fa-pencil" style="color: blue;"></i>
</div>
`

// insere le paragraphe dans l element contenu 
contenu1.appendChild(paragraphe);
tab.push(contenu1);
 }
// * vider l input 
input1.value="";

tab.push(contenu1);
console.log(contenu1);
}
element.addEventListener("click",add_boite)


}


// * btn_delete


contenu1.addEventListener("click",(element)=>
{
if(element.target.classList.contains(`delete`))
{
    if(confirm("Voulez vous vraiment supprimer ?")==true)
    {
            element.target.parentElement.parentElement.remove();

    }
}
});


// * btn modifier

contenu1.addEventListener("click",(element)=>
{
if(element.target.classList.contains(`update`))
{
    if(confirm("Voulez vous vraiment modifiez ?")==true)
{
        let divparent = element.target.parentElement.parentElement;
    let paragraph = divparent.firstElementChild
console.log(paragraph);
let ask = prompt("Modifiez s'il vs plait");
paragraph.textContent = ask;
}

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

console.log(selection);

console.log(contenu1.nodeName);



// * fin exo 

function filterTodos(e) {
    const todos = contenu1.children;

    console.log(e.target.value);
    console.log(e.target.classList);
    console.log(todos);

for (let k = 0; k < todos.length; k++) {
  let element = todos[k];

  switch (e.target.value) {
    case "all":
      console.log(element);
      element.style.display = "flex";
      break;

    case "completed":
      console.log(element);

      if (element.style.backgroundColor=="green") {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
      break;

    case "uncompleted":
      console.log(element);

      if (element.style.backgroundColor=="green")  {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
      break;
  }

  
}


  }
  selection.addEventListener("change", filterTodos);







