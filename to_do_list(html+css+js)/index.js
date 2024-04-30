const toDoList = document.querySelector("#to-do-list");
const addButton = document.querySelector("#add");

function addNewTodo(text) {
  newList = document.createElement("li");
  newList.textContent = text;
  cancle_button = document.createElement("button");

  toDoList.append(newList);
  // return newList;
}

function updateToDo(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function addToDo() {
  const toDo = document.querySelector("#to-do").value;
  if (toDo !== "") {
    addNewTodo(toDo);
    // const newItem = addNewTodo(toDo);
    // newItem.addEventListener("click", updateToDo);
  } else {
    alert("오늘 할 일을 입력해주세요");
  }
}

addButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", updateToDo);

/*
addButton.onclick = () => {
  const toDo = document.querySelector("#to-do").value;
  if (toDo !== "") {
    addNewTodo(toDo);
  } else {
    alert("오늘 할 일을 입력해주세요");
  }
};
*/
