function bmiCalculator(name, weight, height) {
  let bmi = (weight / ((height * height) / 10000)).toFixed(1);
  console.log(name + "님의 체질량지수는 " + bmi + "입니다.");
  if (bmi < 18.5) {
    console.log("저체중이니 주의하세요.");
  }
  if (bmi > 25) {
    console.log("비만이니 주의하세요.");
  } else if (bmi > 23) {
    console.log("과체중이니 주의하세요.");
  }
}

bmiCalculator("A", 76, 174);
