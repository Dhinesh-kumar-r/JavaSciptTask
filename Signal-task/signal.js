//Manual

let stop = document.getElementById("stop").addEventListener("click", () => {
  document.getElementById("red").style.backgroundColor = "red";
  setTimeout(stop, 3000);
});
let ready = document.getElementById("ready").addEventListener("click", () => {
  document.getElementById("yellow").style.backgroundColor = "yellow";
});
let go = document.getElementById("go").addEventListener("click", () => {
  document.getElementById("green").style.backgroundColor = "green";
});

//Automatic

let f1 = () => {
  document.getElementById("red").style.backgroundColor = "red";
};

let f2 = () => {
  document.getElementById("yellow").style.backgroundColor = "yellow";
};

let f3 = () => {
  document.getElementById("green").style.backgroundColor = "green";
};
setTimeout(f1, 2000);
setTimeout(f2, 10000);
setTimeout(f3, 15000);
