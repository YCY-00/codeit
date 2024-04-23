function printTriangle(height) {
  row_star = "";
  for (let i = 1; i <= height; i++) {
    row_star += "*";
    console.log(row_star);
  }
}

console.log("높이: 5");
printTriangle(5);
