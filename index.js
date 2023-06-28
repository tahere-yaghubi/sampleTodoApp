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
  li.draggable = "true";
  li.ondragstart = "drag(event)";
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

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

///////

const lists = document.querySelectorAll(".list");

lists.forEach((l) => {
  l.addEventListener("dragenter", dragEnter);
  l.addEventListener("dragover", dragOver);
  l.addEventListener("dragleave", dragLeave);
  l.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");

  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove("hide");
}
