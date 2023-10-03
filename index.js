const items = [{
    title: "Exercicio 1",
    icon: "fa fa-file",
    menu: ""
},
{
    title: "Exercicio 2",
    icon: "fa fa-file"
}]

const container = document.querySelector(".container");

const win = document.querySelector(".window");
const menuWindow = document.querySelector('.menu');
const menubar = document.querySelector(".menubar");

container.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    console.log(e.path[0].className);
    
    if(e.path[0].className === "container"){
        menubar.className = "menubar menuopen";
        menubar.style.top = `${e.y}px`;
        menubar.style.left = `${e.x}px`;
    }
}, false);

container.addEventListener("click", (e) => {
    if(e.path[0].className === "container"){
        menubar.className = "menubar";
    }
})

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
