// Variables to select the outer (main) grid and inputs
const grid = document.querySelector('#grid')
const blackBtn = document.querySelector('.black')
const resetBtn = document.querySelector('.reset')
const rgbBtn = document.querySelector('.rgb')
const colorWell = document.querySelector('#col')
const slider = document.querySelector('#slider')

// function creates a grid depending on the size it recieves
const CreateGrid = gridSize => {
    grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`
    for (let i=0; i<gridSize*gridSize; i++){
        const div = document.createElement('div')
        grid.appendChild(div)
    }    
}

// function which updates the number of cells in the grid
const UpdateGrid = () => {
    document.querySelector('#sliderLabel').innerHTML = slider.value
    RemoveAllChildNodes(grid)
    CreateGrid(slider.value)
    Reset()
}

// function which removes all child nodes (used when updating grid)
const RemoveAllChildNodes = parent => {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

// function to set the cells background color
const SetCellColor = event => {
    document.querySelectorAll('#grid div').forEach(cell => cell.addEventListener('mouseover', ()=>{
        if (event.target === blackBtn){
            cell.style.backgroundColor = 'black'
        } else if (event.target === rgbBtn){
            cell.style.backgroundColor = Rainbow()
        }
    }))
}

// function assigns cells background color a random color from the array
const Rainbow = () => {
    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}

// function which updates or changes cells color when color picker is used
const updateFirst = event => {
    let cells = grid.children
    for (let cell of cells){
        cell.addEventListener('mouseover', ()=>{
            if (cell){
                cell.style.backgroundColor = event.target.value
            }
        })
    }
}

// function to reset all cells back to white
const Reset = () => {
    document.querySelectorAll('#grid div').forEach(cell => cell.style.backgroundColor = 'white')
}

// initialises grid to 16x16
CreateGrid(16)

// event listeners
resetBtn.addEventListener('click', Reset)
blackBtn.addEventListener('click', SetCellColor)
rgbBtn.addEventListener('click', SetCellColor)
colorWell.addEventListener("change", updateFirst, false);
colorWell.addEventListener("input", updateFirst, false);
slider.addEventListener('change', UpdateGrid)