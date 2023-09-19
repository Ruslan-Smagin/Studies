function createChessboard(size) {
    const chessboard = $('<div class="chessboard"></div>');

    for (let i = 0; i < size; i++) {
        const row = $('<div class="row"></div>');

        for (let j = 0; j < size; j++) {
            const cell = $('<div class="cell"></div>');
            if ((i + j) % 2 === 0) {
                cell.addClass('white');
            } else {
                cell.addClass('black');
            }
            row.append(cell);
        }

        chessboard.append(row);
    }

    return chessboard;
}