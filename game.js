const colorInput = document.getElementById("color-input");
const grid = document.querySelector(".game-grid");
const gridSizeInput = document.getElementById("gridsize-input");
const resetBtn = document.getElementById("reset-btn");

colorInput.onchange = () => resetGame();
gridSizeInput.onchange = () => resetGame();
resetBtn.onclick = () => resetGame();

let currentColor = "#000000";
let currentGridSize = "16x16";

function createGrid() {
  for (let index = 0; index < 16 * 16; index++) {
    grid.style.gridTemplateRows = `repeat(16,1fr)`;
    grid.style.gridTemplateColumns = `repeat(16,1fr)`;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", () => console.log('test'));
    grid.appendChild(gridSquare);
  }
}

function resetGame() {
}

createGrid()
