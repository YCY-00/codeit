const colorList = document.querySelector(".list");
const sidebar = document.querySelector(".sidebar");

function addColors(mbtiOb) {
  const mbtiID = document.createElement("div");
  mbtiID.textContent = mbtiOb.id;
  mbtiID.classList.add("id");

  const mbtiMBTI = document.createElement("div");
  mbtiMBTI.textContent = mbtiOb.mbti;
  mbtiMBTI.classList.add("mbti");

  const arrow = document.createElement("div");
  arrow.innerHTML = '<img class="arrow-tip" src="images/arrow.svg"></img>';
  arrow.classList.add("arrow");

  const colorBox = document.createElement("div");
  colorBox.style.backgroundColor = mbtiOb.colorCode;
  colorBox.classList.add("color-box");

  const mbtiColor = document.createElement("div");
  mbtiColor.textContent = mbtiOb.colorCode;
  mbtiColor.classList.add("color");

  const newList = document.createElement("li");
  /* 각각의 영역으로 나누어 태그를 생성한 후, 문자열 형태로 변환하여 삽입 */
  newList.innerHTML =
    mbtiID.outerHTML +
    mbtiMBTI.outerHTML +
    arrow.outerHTML +
    colorBox.outerHTML +
    mbtiColor.outerHTML;
  newList.classList.add("item");

  colorList.append(newList);
}

function addFilter(event) {
  /* mbti 부분을 선택한 경우 */
  if (event.target.classList.contains("mbti")) {
    const filter =
      document.createElement("span"); /* span은 div와 달리 inline */
    const eventMBTI = event.target.textContent;
    filter.innerHTML = `${eventMBTI} <img class="remove" src="images/x.svg"></img>`;
    filter.classList.add("filter");

    sidebar.append(filter);
  }
}

function deleteFilter(event) {
  if (event.target.classList.contains("remove")) {
    event.target.parentNode.remove();
  }
}

colorList.addEventListener("click", addFilter);
sidebar.addEventListener("click", deleteFilter);

let mbtiColors = [
  { id: 1, mbti: "INFJ", colorCode: "#5F6600" },
  { id: 2, mbti: "ENFP", colorCode: "#C1FFC0" },
  { id: 3, mbti: "ENFP", colorCode: "#C88CE8" },
  { id: 4, mbti: "ESFP", colorCode: "#4C8F9E" },
  { id: 5, mbti: "INFP", colorCode: "#36C667" },
  { id: 6, mbti: "ISTP", colorCode: "#FF5028" },
  { id: 7, mbti: "INTJ", colorCode: "#6746CB" },
  { id: 8, mbti: "ENTJ", colorCode: "#AEC7CB" },
  { id: 9, mbti: "INFP", colorCode: "#6C84AC" },
  { id: 10, mbti: "ESTJ", colorCode: "#10E479" },
  { id: 11, mbti: "ESFJ", colorCode: "#F0DF32" },
  { id: 12, mbti: "ENFP", colorCode: "#106100" },
  { id: 13, mbti: "ENTJ", colorCode: "#40FA34" },
  { id: 14, mbti: "INFP", colorCode: "#4D74B8" },
  { id: 15, mbti: "ISFP", colorCode: "#95FCC0" },
  { id: 16, mbti: "INFP", colorCode: "#C4601E" },
  { id: 17, mbti: "ENFJ", colorCode: "#ECBB30" },
  { id: 18, mbti: "ESFP", colorCode: "#A894B2" },
  { id: 19, mbti: "ENFP", colorCode: "#8649B6" },
  { id: 20, mbti: "ENFP", colorCode: "#EFB578" },
];

for (mbtiOb of mbtiColors.reverse()) {
  addColors(mbtiOb);
}
