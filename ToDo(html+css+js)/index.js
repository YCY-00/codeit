const toDoList = document.querySelector("#to-do-list");
const button = document.querySelector("#add");

function addNewTodo(text) {
  newList = document.createElement("li");
  newList.textContent = text;
  toDoList.append(newList);
}

button.onclick = () => {
  const toDo = document.querySelector("#to-do").value;
  if (toDo !== "") {
    addNewTodo(toDo);
  } else {
    alert("오늘 할 일을 입력해주세요");
  }
};
