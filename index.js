//|Dialog :
const showButton = document.getElementById("showDialog");
const showBgDialog = document.getElementById("show-bg-dialog");
const TodoDialog = document.getElementById("todoDialog");
const bgColorDialog = document.getElementById("bg-colorDialog");
showButton.addEventListener("click", () => {
  TodoDialog.showModal();
});

showBgDialog.addEventListener("click", () => {
  bgColorDialog.showModal();
});

const adBtn = document.getElementById("addItem");
var close = document.getElementsByClassName("close");
adBtn.addEventListener("click", () => {
  addElement();
});
dragAndDrop();
//drag and drop
function dragAndDrop() {
  var items = document.getElementsByClassName("item");
  var lists = document.getElementsByClassName("list");
  var todolist = document.getElementById("todolist");
  var doinglist = document.getElementById("doinglist");
  var donelist = document.getElementById("donelist");
  var dragItem = null;
  for (el of items) {
    el.addEventListener("dragstart", dragStartFunc);
    el.addEventListener("dragend", dragEndFunc);
  }
  for (el of lists) {
    el.addEventListener("dragover", dragOverFunc);
    el.addEventListener("dragenter", dragEnterFunc);
    el.addEventListener("dragLeave", dragLeaveFunc);
    el.addEventListener("drop", dropFunc);
  }
}

function addElement() {
  //create element
  const li = document.createElement("li");
  li.className = "item";
  li.draggable = "true";
  document.getElementById("todolist").appendChild(li);
  dragAndDrop();
  //input value
  var inputValue = document.getElementById("input");
  //add input value to li
  var liText = document.createTextNode(inputValue.value);
  li.appendChild(liText);
  // add li to list

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
      div.style.display = "none";
    };
  }
}

function dragStartFunc() {
  dragItem = this;
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEndFunc() {
  this.className = "item";
  dragItem = null;
}

function dragOverFunc(e) {
  e.preventDefault();
  console.log("drag over");
}
function dragEnterFunc() {
  console.log("drag entered");
}
function dragLeaveFunc() {
  console.log("drag left");
}
function dropFunc() {
  this.append(dragItem);
}
