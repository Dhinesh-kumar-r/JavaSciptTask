let light = document.getElementById("light");
const on = document.getElementById("btn1");
const off = document.getElementById("btn2");
let div = document.getElementById("div")

on.addEventListener("click",()=>{
    div.style.backgroundColor="yellow"
})

off.addEventListener("click",()=>{
    div.style.backgroundColor= "black"
})