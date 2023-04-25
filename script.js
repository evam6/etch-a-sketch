const divGrid = document.querySelector('.grid');
let gridSize = 16;
let colorMode = 'monochrome';

const buttonSize = document.querySelector('.button-size');
const buttonMono = document.querySelector('.button-mono');
const buttonRGB = document.querySelector('.button-rgb');
const buttonClear = document.querySelector('.button-clear');

// getting user input for grid size and creating such grid
buttonSize.addEventListener('click', () => {
    gridSize = prompt('Enter number of squares per side (from 2 to 100):');
    while (gridSize > 100 || gridSize < 2) {
        gridSize = prompt('Limits: minimum 2, maximum 100. Please choose different value:')
    }
    deleteGrid();
    createGrid(gridSize);
    setColor(colorMode);
})

// clearing the grid
buttonClear.addEventListener('click', () => {
    deleteGrid();
    createGrid(gridSize);
    setColor(colorMode);
}) 

buttonMono.addEventListener('click', () => {
    colorMode = 'monochrome';
    setColor(colorMode);
})

buttonRGB.addEventListener('click', () => {
    colorMode = 'rgb';
    setColor(colorMode);
})

function createGrid(gridSize) {
    divGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('element');
        divGrid.appendChild(gridElement);
    }
    return;
}

function setColor(colorMode) {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            if (colorMode == 'rgb') {
                const letters = '0123456789ABCDEF';
                let colorRGB = '#';
                for (let i = 0; i < 6; i++) {
                    colorRGB += letters[Math.floor(Math.random() * 16)];
                }
                color = colorRGB;
            } else {
                color = 'grey';
            }
            element.style.backgroundColor = color;
            
        })
    })
}

// deleting grid by removing all the grid elements 
function deleteGrid() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.remove();
    })
}

createGrid(gridSize);
setColor(colorMode);