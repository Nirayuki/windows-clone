const items = [{
    title: "Exercicio 1",
    icon: "fa fa-file"
},
{
    title: "Exercicio 2",
    icon: "fa fa-file"
}]

const container = document.querySelector(".container");

const win = document.querySelector(".window");
const menuWindow = document.querySelector('.menu');

win.addEventListener("click", () => {
    if(menuWindow.className === "menu open"){
        menuWindow.className = "menu close"
    }else{
        menuWindow.className = "menu open"
    }
})

function render (){
    items.map((item) => {
        const div = document.createElement("div");
        const i = document.createElement("i");
        const p = document.createElement("p");

        div.className = "item";

        i.className = item.icon;

        p.innerText = item.title;

        div.append(i, p);

        container.appendChild(div);
    })
}

render();
