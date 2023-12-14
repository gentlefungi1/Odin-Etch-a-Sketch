const boxContainer = document.querySelector('.box-container');
const gridcells = document.createElement('div');
const reset = document.querySelector('.reset');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');


const grids = 600;
let rows = 16;
let cols = 16;
let = color = "black";

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
boxContainer.style.width = `${grids}px`;
boxContainer.style.height = `${grids}px`;



function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = 'black';
    }
}


function setColor (colorChoice) {
    color = colorChoice;
}


function createGrids(rows, cols) {
    for(let i = 0; i < (rows * cols); i++) {
        const gridcells = document.createElement('div');

        gridcells.style.width = `${(grids / cols) - 2}px`;
        gridcells.style.height = `${(grids / rows) - 2}px`;
        gridcells.classList.add('cell');

        boxContainer.appendChild(gridcells);

        gridcells.addEventListener('mouseover', colorDiv);

        reset.addEventListener('click', (e) => {
            gridcells.style.backgroundColor = "white";
        })
    }

}

function removeGridCells(){
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.textContent = txt;
    removeGridCells();
    createGrids(this.value, this.value);
}

createGrids(16, 16);

