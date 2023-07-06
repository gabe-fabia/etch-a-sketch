const columns = 16;
const rows = 16;

const grid = document.createElement('div');
grid.className = 'grid';
// console.log(grid);

for (let i = 0; i < columns; i++) {
    const column = document.createElement('div'); // create column
    column.className = 'column';
    // console.log(column);

    for (let j = 0; j < rows; j++) {
        const row = document.createElement('div'); // create row
        row.className = 'row';
        // console.log(row);
        // row.textContent = i + '-' + j; // coordinates
        column.appendChild(row); // append row in column
    }

    grid.appendChild(column);
}

const body = document.querySelector('body');
// console.log(body);

body.appendChild(grid);

const tiles = document.querySelectorAll('.row');
console.log(tiles);

var mouseOverFunction = function() {
    this.style.color = 'black';
}

grid.onmouseover = mouseOverFunction;