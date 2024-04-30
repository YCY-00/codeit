const flagBlue = document.querySelector(".flag-blue");
const flagWhite = document.querySelector(".flag-white");

function reset() {
  document.querySelector(".up").classList.remove("up");
}

function flagUp(e) {
  if (e.button === 0) {
    // 좌클릭
    flagBlue.classList.add("up");
  } else if (e.button === 2) {
    // 우클릭
    flagWhite.classList.add("up");
  }

  setTimeout(reset, 500);
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// 테스트 코드
document.addEventListener("mousedown", flagUp);
