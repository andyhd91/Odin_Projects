const container = document.getElementById("container");
let rows = 0;
let cols = 0;
let cell = [];
//clear
const resetButton = document.querySelector('#clear-screen');
resetButton.addEventListener('click', ClearAll);

//new Grid
const newGrid = document.querySelector('#new-grid');
newGrid.addEventListener('click', function(){
    rows = prompt('How Many Rows ?');
    cols = prompt('How Many Columns ?');
    console.log(rows);
    console.log(cols);
    ClearAll();
    createGrid(rows, cols);
})


function createGrid(rows,cols) {
    removeCells();
    container.style.gridTemplateColumns = (`repeat(${rows}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${cols}, 1fr`);
    let numberOfCells = rows * cols;
    for (let i =0; i < numberOfCells; i++) {
        console.log ('cell')
        cell[i] = document.createElement('div');
        cell[i].classList.add('cell');
        cell[i].innerText = i;
        cell[i].addEventListener('mouseenter', Paint)
        container.appendChild(cell[i]);
    }

}

function removeCells() {
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

function Paint(e) {
    e.target.style.backgroundColor = 'black';

}

function ClearAll () {
    cell.forEach(item => {
        item.style = 'background-color: rgba(255, 255, 255, 1)';
        item.removeEventListener('mouseenter', Paint);
        //console.log('clearing...')

    })
}


createGrid(16,16)

 