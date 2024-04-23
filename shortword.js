function shortWords() {
  let word = "";
  for (arg of arguments) {
    word += arg[0];
  }

  console.log(word);
}

shortWords("나만", "없어", "고양이");
shortWords("만두", "반으로", "잘라먹네", "부지런하다");
shortWords("결국", "자바스크립트가", "해피한", "지름길");
shortWords("빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색");
