const divGrid = document.querySelector('.grid');
let gridSize = 16;

const buttonSize = document.querySelector('.button-size');
buttonSize.addEventListener('click', () => {
    gridSize = prompt('Enter number of squares per side:');
    while (gridSize > 100) {
        gridSize = prompt('Maximum limit is 100. Please choose smaller value:')
    }
    deleteGrid();
    createGrid(gridSize);
})

function createGrid(gridSize) {
    divGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 1; i <= gridSize*gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('element');
        gridElement.addEventListener('mouseenter', () => {
        gridElement.style.backgroundColor = 'grey';
        })
        divGrid.appendChild(gridElement);
    }
    return;
}

function deleteGrid() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.remove();
    })
}

createGrid(gridSize);