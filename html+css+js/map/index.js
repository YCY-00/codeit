// const map = document.querySelector(".map");
const map_item = document.querySelectorAll(".map [data-title]");

function showTitle(e) {
  // const room = e.target.getAttribute("data-title");
  const room = e.target.dataset.title;
  if (room) {
    const title = document.createElement("span");
    title.classList.add("title");
    title.textContent = e.target.getAttribute("data-title");
    e.target.append(title);
  }
}

function removeTitle(e) {
  if (
    e.target.dataset.title &&
    e.target.lastElementChild.classList.contains("title")
  ) {
    // const title = document.querySelector(`.${e.target.className} .title`);
    e.target.lastElementChild.remove();
  }
}

// map.addEventListener("mouseover", showTitle); -> [date-title]의 자식 노드로 이동했을 때도 mouseover/mouseout 발생
// map.addEventListener("mouseout", removeTitle);

for (let item of Array.from(map_item)) {
  item.addEventListener("mouseenter", showTitle);
  item.addEventListener("mouseleave", removeTitle);
}
