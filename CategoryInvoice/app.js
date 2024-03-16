let product = document.getElementById("product");
let add = document.getElementById("add");
let pname = document.getElementById("pname");
let select = document.getElementById("sel");
let rate = document.getElementById("rate");
let qty = document.getElementById("qty");
let amount = document.getElementById("amount");
let submit = document.getElementById("button");
let display = document.getElementById("display");
let items = [];

add.addEventListener("click",(add = () => {
    let opt = '<option value="select">select</option>';
    items.push(product.value);
    for (let i of items) {
      opt += "<option value=" + i + ">" + i + "</option>";
    }
    select.innerHTML = opt;
  })
);

submit.addEventListener("click",(additems = () => {
    let image = document.getElementById("pimage").files[0];
    let read = new FileReader();
    read.readAsDataURL(image);
    read.onloadend = () => {
      document.getElementById("img1").src = read.result;
    };

    display.innerHTML = `<tr>
    <td>${pname.value}</td>
    <td><img id="img1" src = ${read.result} height="100px" width="100px"/></td>
    <td>${rate.value}</td>
    <td>${qty.value}</td>
    <td>${amount.value}</td>
    </tr>`;

    pname.value = "";
    qty.value = "";
    rate.value = "";
    amount.value = "";
    img1.value = "";
  })
);

qty.addEventListener(
  "keyup",
  (total = () => {
    amount.value = parseInt(qty.value) * parseInt(rate.value);
  })
);
