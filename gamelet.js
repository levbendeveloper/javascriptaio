const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

let horizontalPosition = 0;
let verticalPosition = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    horizontalPosition = horizontalPosition - 10;
  }
  if (e.code === "ArrowRight") {
    horizontalPosition = horizontalPosition + 10;
  }
  if (e.code === "ArrowUp") {
    verticalPosition = verticalPosition - 10;
  }
  if (e.code === "ArrowDown") {
    verticalPosition = verticalPosition + 10;
  }
  if (horizontalPosition < 0) {
    horizontalPosition = 0;
  }
  if (verticalPosition < 0) {
    verticalPosition = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = horizontalPosition + "px";
  ball.style.top = verticalPosition + "px";
}
