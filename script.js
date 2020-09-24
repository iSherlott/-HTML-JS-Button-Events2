let btns = document.getElementsByTagName("button");
btns[3].addEventListener("click", () => {
  alert(text);
});
console.log(text);

const paragraph = document.getElementsByTagName("p");

function btn0() {
  paragraph[0].innerHTML = text;
}

function btn1() {
  paragraph[1].innerHTML = text;
  paragraph[2].innerHTML = text;
}

function btn2() {
  paragraph[1].innerText = "";
}
