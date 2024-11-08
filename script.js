const boxes = document.getElementsByClassName("box");

for (let box of boxes) {
  box.addEventListener("click", boxClicked);
}
 
function boxClicked() {
  this.style.backgroundColor = "#fbe444";
}