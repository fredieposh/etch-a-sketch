for (let i = 0; i < 16; i++) {
    gridRowDiv = document.createElement("div");
    gridRowDiv.classList.add("gridRow");

    containerDiv = document.querySelector("#container");
    containerDiv.appendChild(gridRowDiv);
}