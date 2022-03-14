const colorInput = document.getElementById("color-input");
const grid = document.querySelector(".game-grid");
const gridSizeInput = document.getElementById("gridsize-input");
const resetBtn = document.getElementById("reset-btn");
const rainbowBtn = document.getElementById("rainbow-btn");

let currentMode = "static";
let gridBackground = "#ffffff";
let gridForeground = "#aaaaaa";

gridSizeInput.onchange = () => createGrid(gridSizeInput.value);
resetBtn.onclick = () => resetDrawing();
rainbowBtn.onclick = () => rainbowMode();


function createGrid(gridSize) {
  resetGrid();
  for (let index = 0; index < gridSize ** 2; index++) {
    grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", () => paintSquare(gridSquare));
    grid.appendChild(gridSquare);
  }
}

function resetGrid() {
  grid.innerHTML = "";
}

function resetDrawing() {
  const gridSquares = document.querySelectorAll(".square");
  gridSquares.forEach(element => element.style.background = gridBackground);
}

function paintSquare(square) {
  if (currentMode == "rainbow") {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    gridForeground = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } else if (currentMode == "static") {
    gridForeground = colorInput.value;
  }
  square.style.background = gridForeground;
}

function rainbowMode() {
  if (currentMode == "rainbow") {
    currentMode = "static";
    rainbowBtn.classList.remove("active");
  } else if (currentMode == "static") {
    currentMode = "rainbow";
    rainbowBtn.classList.add("active");
  }
}

createGrid(16);
