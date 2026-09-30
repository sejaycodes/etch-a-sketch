const grid = document.getElementById('grid')

function createGrid(){
    const totalSquares = 16 * 16

    for(let i = 0; i < totalSquares; i++){
        const cell = document.createElement('div')
        cell.classList.add('grid-cell')
        grid.appendChild(cell)
    }
}

function createNewGrid(size){
    grid.innerHTML = ""

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    const totalSquares = size * size

    for (let i = 0; i < totalSquares; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        grid.appendChild(cell);
    }
}

const button = document.getElementById('changeGrid')
button.addEventListener('click', () => {
    const amount = prompt('Enter number of squares: ')
    const gridSize = parseInt(amount, 10)
    if (gridSize >= 1 && gridSize <= 100) {
        createNewGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
})



createGrid()