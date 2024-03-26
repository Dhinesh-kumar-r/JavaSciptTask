let light = document.getElementById("light");
const on = document.getElementById("btn1");
const off = document.getElementById("btn2");
let div = document.getElementById("div");

on.addEventListener("click", () => {
  document.getElementById("bulb-off").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

  document.getElementById("cat-off").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
});

off.addEventListener("click", () => {
  document.getElementById("bulb-off").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

  document.getElementById("cat-off").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
});
