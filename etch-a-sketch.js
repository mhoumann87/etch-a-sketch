/**
 * Etch-A-Sketch like program in the browser.
 * When the mmouse hover over a square it will change to a clolor,
 * that the user have choser. It is possible to change the size of the
 * grid up to 64 * 64. And the user can clear the grid at any time.
 * Made as part of Web Developer 101 course on https://www.theodinproject.com.
 * Made by Michael Houmann.
 */

// Get the elements on the page
const changeGrid = document.querySelector("#chgGrid");
const changeColor = document.querySelector("#chgColor");
const clear = document.querySelector("#clearGrid");
const container = document.querySelector("#gridContainer");

// Set up the base grid with 16 * 16 items
let gridSize = 16;
let hoverColor = "#000000";
// A function to change the color on the hover

// A function to change the size of the grid
function changeGridSize() {
  gridSize = prompt("Please choose grid size (between 8 and 64)");

  if (gridSize < 8 || gridSize > 64) {
    alert("Please choose a number of minimun 8 and maximum 64");
    changeGridSize();
  }
  container.setAttribute("style", "display: none");
  const itemDiv = document.querySelectorAll(".item");
  if (itemDiv !== 0) {
    itemDiv.forEach(item => {
      container.removeChild(item);
    });
  }
  drawGrid();
}
// A function to clear the grid
function clearGrid() {
  const divs = document.querySelectorAll(".item");
  divs.forEach(div => {
    div.style.background = "whitesmoke";
  });
}

// A function to change the color of the item on hover
function changeGridColor(e) {
  hoverColor = e.target.value;
}

// Function to draw the grid
function drawGrid() {
  container.style.display = "flex";
  let gridTotalSize = gridSize * gridSize;
  let itemSize = 768 / gridSize;
  itemSize = parseFloat(itemSize.toFixed(1));
  for (let i = 0; i < gridTotalSize; i++) {
    const div = document.createElement("div");
    div.className = "item";
    div.style.width = `${itemSize}px`;
    div.style.height = `${itemSize}px`;
    container.appendChild(div);
  }
  const gridDivs = document.querySelectorAll(".item");
  gridDivs.forEach(div => {
    div.addEventListener("mouseover", () => {
      div.style.background = `${hoverColor}`;
    });
  });
}

// Setup event listeners
changeGrid.addEventListener("click", changeGridSize);
changeColor.addEventListener("change", event => changeGridColor(event));
clear.addEventListener("click", clearGrid);

// Draw the grid when the page is fully loaded
window.onload = drawGrid();
