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
    let opacity = 0;
    const gridCells = document.querySelectorAll(".gridCol");
    gridCells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const randomColor = `rgba(${r}, ${g}, ${b}, ${opacity})`
            e.target.style.backgroundColor = randomColor;
            opacity += 0.1;
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