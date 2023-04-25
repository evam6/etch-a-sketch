const divGrid = document.querySelector('.grid');
let gridSize = 16;
let colorMode = 'monochrome';

const buttonMono = document.querySelector('.button-mono');
const buttonRGB = document.querySelector('.button-rgb');
const buttonClear = document.querySelector('.button-clear');
const buttonSize = document.querySelector('.button-size');
const sliderRange = document.getElementById('slider-range');

// getting slider value for grid size and creating such grid
sliderRange.addEventListener('input', () => {
    gridSize = sliderRange.value;
    changeSliderText(gridSize);
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

function changeSliderText(number) {
    const text = document.getElementById('slider-value');
    text.textContent = number + ' x ' + number;
}

createGrid(gridSize);
setColor(colorMode);