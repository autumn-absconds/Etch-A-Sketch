const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
    setGridSize(10);
    fillGrid(10);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);

    }

}

function changeColor(e) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

function changeSize() {
    let newSize = prompt("Enter new size");
    if (newSize !== null) {
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number from 1-64 range");
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}
