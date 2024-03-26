document.getElementById("pick").addEventListener('input',function(){
 
  let output= document.getElementById("output")
  document.getElementById('output').style.backgroundColor = this.value;
  document.getElementById('output').innerHTML = `<h4>${this.value}</h4>`;
})
