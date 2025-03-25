// Creating the grid
function createGrid(n=16){
    for (let i = 0; i < n; i++) {
        gridRowDiv = document.createElement("div");
        gridRowDiv.classList.add("gridRow");
        
        containerDiv = document.querySelector("#container");
        containerDiv.appendChild(gridRowDiv);
    }
    
    gridRowsList = document.querySelectorAll(".gridRow");
    gridRowsList.forEach(gridRow => {
        for (let i = 0; i < n; i++) {
            gridColDiv = document.createElement("div");
            gridColDiv.classList.add("gridCol");
            gridRow.appendChild(gridColDiv);
        }
    })
}

createGrid();

// Paint the cells
gridCells = document.querySelectorAll(".gridCol");
gridCells.forEach(cell => {
    cell.addEventListener('mouseenter', (e) => {
        e.target.classList.add("cellColor");
    });
    cell.addEventListener('mouseout', (e) => {
        e.preventDefault();
    });
})