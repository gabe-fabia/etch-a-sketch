function gridGenerator(pixels) {

    const grid = document.createElement('div');
    grid.className = 'grid';
    // console.log(grid);

    for (let i = 0; i < pixels; i++) {
        const column = document.createElement('div'); // create column
        column.className = 'column';

        for (let j = 0; j < pixels; j++) {
            const row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }

        grid.appendChild(column);
    }

    const body = document.querySelector('body');
    // console.log(body);

    body.appendChild(grid);
};

gridGenerator(50);
game();

const pixelButton = document.querySelector('#changePixels');

pixelButton.addEventListener('click', () => {
    let newPixels = prompt("How many tiles do you want? (1 to 100)");

    if (newPixels < 1 || newPixels >= 100) {
        alert("Please enter a number between 1 and 100");
        newPixels;
    }
    else {
        let grid = document.querySelector('div');
        document.body.removeChild(grid);
        gridGenerator(newPixels);
        game();
    }
});

function game() {
    const tiles = document.querySelectorAll('.row');
    // console.log(tiles);

    const blackButton = document.querySelector('#blackCursor');
    console.log(blackButton);

    blackButton.addEventListener('click', () => {
        tiles.forEach(function (tile) {
            tile.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'rgb(1,1,1)';
            });
        });
    });

    const rainbowButton = document.querySelector('#rainbowCursor');

    rainbowButton.addEventListener('click', () => {
        tiles.forEach(function (tile) {
            tile.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = randomRgbString();
            });
        });
    });

    const resetButton = document.querySelector('#resetButton');

    resetButton.addEventListener('click', () => {
        tiles.forEach(function (tile) {
            tile.style.backgroundColor = 'rgb(256,256,256)';
        });
    });
};

function randomRgbString() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

// copy-pasta:
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

random_bg_color();