const columns = 23;
const rows = 23;

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

tiles.forEach(function (tile) {
    tile.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
});


const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click', () => {
    tiles.forEach(function (tile) {
        tile.style.backgroundColor = 'white';
    });
});