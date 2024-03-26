//blue color
let display = document.getElementById("color");
let show = document.getElementById("show")

let div1 = document.createElement("div");
div1.style.height = "150px";
div1.style.width = "150px";
div1.style.backgroundColor = "blue";
display.append(div1);

let yellowdiv = document.createElement("div")
yellowdiv.style.height="150px"
yellowdiv.style.width = "150px"
yellowdiv.style.backgroundColor = "yellow"
display.append(yellowdiv)

let orange = document.createElement("div")
orange.style.height="150px"
orange.style.width = "150px"
orange.style.backgroundColor = "orange"
display.append(orange)

let gold = document.createElement("div")
gold.style.height="150px"
gold.style.width = "150px"
gold.style.backgroundColor = "gold"
display.append(gold)





div1.addEventListener("click", () => {
  show.style.backgroundColor = "blue";
});

yellowdiv.addEventListener("click",()=>{
   show.style.backgroundColor="yellow"
})

orange.addEventListener("click",()=>{
    show.style.backgroundColor="orange"
})

gold.addEventListener("click",()=>{
    show.style.backgroundColor="gold"
})
