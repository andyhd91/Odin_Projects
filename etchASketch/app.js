const container = document.getElementById("container");
let rows = 0;
let cols = 0;
//clear
const resetButton = document.querySelector('#clear-screen');
resetButton.addEventListener('click', ClearAll);

//new Grid
const newGrid = document.querySelector('#new-grid');
newGrid.addEventListener('click', function(){
    rows = prompt('How Many Rows ?');
    cols = prompt('How Many Columns ?');
    ClearAll();
    makeRows(rows, cols);
})


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-cell"
    };
};

function Paint() {
    const gridItems = document.querySelectorAll('#container > div');

    gridItems.forEach((item) => {
        //item.count = 0;
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
            //e.target.style.opacity = 1;
            //console.log("blackbox");
        });
    });
}

function ClearAll () {
    const gridItems = document.querySelectorAll('#container > div');

    gridItems.forEach((item) => {
        //console.log('clearing...')
        item.style = 'background-color: white';

    })
}


makeRows(16, 16)
Paint()

 