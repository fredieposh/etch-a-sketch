// Creating the grid
function createGrid(n = 16) {
    for (let i = 0; i < n; i++) {
        const gridRowDiv = document.createElement("div");
        gridRowDiv.classList.add("gridRow");

        const containerDiv = document.querySelector("#container");
        containerDiv.appendChild(gridRowDiv);
    }

    const gridRowsList = document.querySelectorAll(".gridRow");
    gridRowsList.forEach(gridRow => {
        for (let i = 0; i < n; i++) {
            gridColDiv = document.createElement("div");
            gridColDiv.classList.add("gridCol");
            gridRow.appendChild(gridColDiv);
        }
    });
}

function removeGrid() {
    const containerDiv = document.querySelector("#container");
    while (containerDiv.firstChild) {
        containerDiv.firstChild.remove();
    }
}

function paintCells() {
    const gridCells = document.querySelectorAll(".gridCol");
    gridCells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            e.target.classList.add("cellColor");
        });
        cell.addEventListener('mouseout', (e) => {
            e.preventDefault();
        });
    });
}

createGrid();
paintCells();

// Button click triggers input

const changeGridSizeButton = document.querySelector("button");
changeGridSizeButton.addEventListener('click', () => {
    do {
        gridSize = +prompt("Please enter grid sizer between 16 and 100");
    } while ((isNaN(gridSize)) || (gridSize < 16) || (gridSize > 100));

    removeGrid();
    createGrid(gridSize);
    paintCells();
});