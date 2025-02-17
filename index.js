let Num = document.querySelector(".Number");
document.getElementById("btn").addEventListener("click", add);
let num = 0;

function add() {
  num++;
  Num.textContent = num;
}
