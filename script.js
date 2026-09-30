const grid = document.getElementById('grid')

function createGrid(){
    const totalSquares = 16 * 16

    for(let i = 0; i < totalSquares; i++){
        const cell = document.createElement('div')
        cell.classList.add('grid-cell')
        grid.appendChild(cell)
    }
}

createGrid()