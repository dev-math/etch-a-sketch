const colorInput = document.getElementById("color-input");
const grid = document.querySelector(".game-grid");
const gridSizeInput = document.getElementById("gridsize-input");
const resetBtn = document.getElementById("reset-btn");

colorInput.onchange = () => gridForeground = colorInput.value;
gridSizeInput.onchange = () => createGrid(gridSizeInput.value);
resetBtn.onclick = () => resetDrawing();

let gridBackground = "#ffffff";
let gridForeground = "#aaaaaa";

function createGrid(gridSize) {
  const squares = document.querySelectorAll('.square');
  squares.forEach(element => element.remove());
  for (let index = 0; index < gridSize ** 2; index++) {
    grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", () => paintSquare(gridSquare));
    grid.appendChild(gridSquare);
  }
}

function resetDrawing() {
  const gridSquares = document.querySelectorAll('.square');
  gridSquares.forEach(element => element.style.background = gridBackground);
}

function paintSquare(square) {
  square.style.background = gridForeground;
}

createGrid(16);
