for (let i = 0; i < 16; i++) {
    gridRowDiv = document.createElement("div");
    gridRowDiv.classList.add("gridRow");

    containerDiv = document.querySelector("#container");
    containerDiv.appendChild(gridRowDiv);
}

gridRowsList = document.querySelectorAll(".gridRow");
gridRowsList.forEach(gridRow => {
    for (let i = 0; i < 16; i++) {
        gridColDiv = document.createElement("div");
        gridColDiv.classList.add("gridCol");
        gridRow.appendChild(gridColDiv);
    }
})