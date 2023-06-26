//|Dialog :
const showButton = document.getElementById("showDialog");
const TodoDialog = document.getElementById("todoDialog");

showButton.addEventListener("click", () => {
  TodoDialog.showModal();
});

const adBtn = document.getElementById("addItem");
var close = document.getElementsByClassName("close");
adBtn.addEventListener("click", () => {
  addElement();
});

function addElement() {
  //create element
  const li = document.createElement("li");
  li.className = "item";
  //input value
  var inputValue = document.getElementById("input");
  //add input value to li
  var liText = document.createTextNode(inputValue.value);
  li.appendChild(liText);
  // add li to list
  document.getElementById("list").appendChild(li);
  //empty input value
  inputValue.value = " ";
  //add close btn
  const span = document.createElement("span");
  const spanText = document.createTextNode("\u00D7");
  // add close btn to li
  span.appendChild(spanText);
  span.className = "close";
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = () => {
      var div = close[i].parentElement;
      console.log(div, close[i]);
      div.style.display = "none";
    };
  }
}
