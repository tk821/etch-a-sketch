let x = 0;
let y = 0;

function drawSquare(row) {
    x++;
    const position = x + ', ' + y;
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', position);

    row.appendChild(square);

    square.addEventListener('mouseenter', () => square.style.backgroundColor = 'black');
}

function drawRow(grid, numColumns) {
    x = 0;
    y++;
    
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.setAttribute('id', y);

    grid.appendChild(row);

    for (let i = 0; i < numColumns; i++) {
        drawSquare(row);
    }
}

function drawGrid(numColumns, numRows) {
    const grid = document.createElement('div');

    grid.setAttribute('class', 'grid');

    document.body.prepend(grid);

    for (let i = 0; i < numRows; i++) {
        drawRow(grid, numColumns);
    }
}

drawGrid(16, 16);