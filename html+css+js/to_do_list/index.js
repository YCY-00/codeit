const toDoList = document.querySelector("#to-do-list");
// const addButton = document.querySelector("#add");
const input = document.querySelector("input");

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

function addToDo(event) {
  // const toDo = document.querySelector("#to-do").value;
  const toDo = event.target.value;
  if (toDo !== "" && event.key === "Enter") {
    addNewTodo(toDo);
    // const newItem = addNewTodo(toDo);
    // newItem.addEventListener("click", updateToDo);
    event.target.value = "";
  } else {
    alert("입력값이 없습니다");
  }
}

// addButton.addEventListener("click", addToDo);
// input.addEventListener("change", addToDo); -> focus가 풀리면 발생, 값이 없는 경우 발생 X
input.addEventListener("keypress", addToDo);
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
