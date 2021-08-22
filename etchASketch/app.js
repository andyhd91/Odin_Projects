const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-cell"
    };
};

function Paint() {
    const gridItems = document.querySelectorAll('#container > div');

    gridItems.forEach((item) => {
        //item.count = 0;
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            //e.target.style.opacity = 1;
            console.log("blackbox");
        });
    });
}

makeRows(16, 16)
Paint()
 