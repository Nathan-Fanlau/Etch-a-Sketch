main();

function main() {
    const container = document.querySelector("#container");
    const newSize = document.querySelector("#newSize");
    const submitBtn = document.querySelector("#submitBtn");
    const cleanCanvasBtn = document.querySelector("#cleanCanvasBtn");

    submitBtn.addEventListener("click", () => {
        newSize.value > 100 ? alert("Grid size must be under 100.") : updateGridSize(container, newSize.value);
    })

    cleanCanvasBtn.addEventListener("click", () => {
        for(let column=container.firstChild; column !== null; column = column.nextSibling) {
            for(let row = column.firstChild; row !== null; row = row.nextSibling){
                row.style.backgroundColor = "white";
            } 
        }
    })

    populateGrid(container, 16); // Initial grid
}

function populateGrid(container, gridSize){
    const containerSize = container.offsetHeight;

    for(let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        for(let j = 0; j < gridSize; j++){
            const box = document.createElement("div");
            box.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                box.style.backgroundColor = "#" + randomColor;
            })
            box.style.height = `${containerSize / gridSize}px`;
            box.style.width = `${containerSize / gridSize}px`;

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function updateGridSize(container, newSize){
    // Remove old grid
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    populateGrid(container, newSize)
}