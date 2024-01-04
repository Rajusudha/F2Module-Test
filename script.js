const Button = document.querySelector("#btn");
const Inputt = document.querySelector("#input");
const Container = document.querySelector("#container");
const S = document.querySelector("#spn");

let i=0;
function Add(event){
    const todoWork = Inputt.value;
    if(!todoWork){
        return;
    }
    i++;
    const todoCard = document.createElement("div");
    todoCard.className = "card";
    todoCard.innerHTML = `
    <span>${todoWork}</span>
    <span onclick="deleteCard(this)"><i class="fa-solid fa-trash" style="color: #f5f7fa;"></i></span>
    `;
    Inputt.value = "";
    Container.appendChild(todoCard);
    Inputt.blur();
    S.innerText = i;
}
function deleteCard(delCard){
    delCard.parentNode.remove();
    i--;
    S.innerText = i;
}
Button.addEventListener("click",Add);