const mbti = document.querySelector(".mbti");
const input = document.querySelector(".input");
const button = document.querySelector(".random");

function selectMBTI(e) {
  if (e.target.classList.contains("E")) {
    e.target.classList.toggle("selected");
    if (e.target.classList.contains("selected")) {
      /* null 또는 노드를 반환하며, 노드는 2개 뿐이므로 or를 사용하여 반드시 이웃 선택 */
      const sibling =
        e.target.previousElementSibling || e.target.nextElementSibling;
      sibling.classList.remove("selected");
    }
  }
}

function isValidColor(colorCode) {
  /* 정규 표현식 객체. // 사이에 원하는 패턴을 넣어 사용 */
  /* #으로 시작하는 3자리 or 6자리의 16진수 숫자 */
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return regex.test(colorCode);
}

function chanageColor(e) {
  if (e.key === "Enter" && isValidColor(e.target.value)) {
    e.target.nextElementSibling.style.backgroundColor = e.target.value;
  } else if (e.key === "Enter") {
    alert("색상 코드가 올바르지 않습니다.");
  }
}

function randomColor(e) {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  input.value = color;
  const event = new Event("keypress");
  event.key = "Enter";
  input.dispatchEvent(event); /* keypress 이벤트 강제 실행 */
}

mbti.addEventListener("click", selectMBTI);
input.addEventListener("keypress", chanageColor);
button.addEventListener("click", randomColor);
