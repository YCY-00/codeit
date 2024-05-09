const toDoList = document.querySelector(".list");
// const addButton = document.querySelector("#add");
const input = document.querySelector("input");
let id = 0;

function addNewTodo(text) {
  const newList = document.createElement("li");
  id += 1;
  newList.textContent = `${id}. ${text}`;

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
  } else if (event.key === "Enter") {
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

/*
const data = [
  {
    title: "자바스크립트 공부하기",
    isClear: true,
  },
  {
    title: "쓰레기 분리수거",
    isClear: false,
  },
  {
    title: "고양이 밥주기",
    isClear: true,
  },
  {
    title: "독서하기",
    isClear: false,
  },
  {
    title: "영어 공부하기",
    isClear: false,
  },
];

data.forEach((toDo, idx) => {
  const newList = document.createElement("li");
  newList.textContent = `${idx + 1}. ${toDo.title}`;
  if (toDo.isClear) {
    newList.classList.add("done");
  }
  toDoList.append(newList);
});
*/
