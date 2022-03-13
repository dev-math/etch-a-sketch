const colorInput = document.getElementById("color-input");
const grid = document.querySelector(".game-grid");
const gridSizeInput = document.getElementById("gridsize-input");
const resetBtn = document.getElementById("reset-btn");

// colorInput.onchange = () => resetGame();
// gridSizeInput.onchange = () => resetGame();
resetBtn.onclick = () => resetDrawing();

let currentColor = "#000000";
let currentGridSize = "16x16";

// temp
let gridc = 16;
let gridr = 16;
let gridBackgroundColor = "#ffffff";

function createGrid() {
  for (let index = 0; index < 16 * 16; index++) {
    grid.style.gridTemplateRows = `repeat(${gridr},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridc},1fr)`;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", () => gridSquare.style.background = "#f00");
    grid.appendChild(gridSquare);
  }
}

function resetDrawing() {
  const gridSquares = document.querySelectorAll('.square');
  gridSquares.forEach(element => element.style.background = gridBackgroundColor);
}

function changeGrid() {
  
}

createGrid()
