export const thereIsAWinner = (board) => {
    /*     BOARD EXAMPLE
    const board = [
        ["green", "green", "green", "green", "green", null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
    ]; */
    return (
        checkColumn(board) || //Solo hay 3 combinaciones posibles por columna
        checkRow(board) || //Solo hay 3 combinaciones posibles por fila
        checkDiagonalRight(board.slice().reverse()) || //En los checkDiagonal se manda el board al reves, para chequear(hacer la logica de los for) en el mmismo sentido en el que se muestra visualmente el board
        checkDiagonalLeft(board.slice().reverse()) //En los checkDiagonal se manda el board al reves, para chequear(hacer la logica de los for) en el mmismo sentido en el que se muestra visualmente el board
    );
};

const checkColumn = (board) => {
    for (let iColumn = 0; iColumn < 7; iColumn++) {
        for (let iRow = 3; iRow < 6; iRow++) {
            if (
                board[iColumn][iRow] &&
                board[iColumn][iRow] === board[iColumn][iRow - 1] &&
                board[iColumn][iRow] === board[iColumn][iRow - 2] &&
                board[iColumn][iRow] === board[iColumn][iRow - 3]
            ) {
                return { connect: true, direction: "column" };
            }
        }
    }
    return false;
};

const checkRow = (board) => {
    for (let iRow = 0; iRow < 6; iRow++) {
        for (let iColumn = 3; iColumn < 7; iColumn++) {
            if (
                board[iColumn][iRow] &&
                board[iColumn][iRow] === board[iColumn - 1][iRow] &&
                board[iColumn][iRow] === board[iColumn - 2][iRow] &&
                board[iColumn][iRow] === board[iColumn - 3][iRow]
            ) {
                return { connect: true, direction: "row" };
            }
        }
    }
    return false;
};

const checkDiagonalRight = (board) => {
    for (let iRow = 3; iRow < 6; iRow++) {
        for (let iColumn = 0; iColumn < 4; iColumn++) {
            if (
                board[iColumn][iRow] &&
                board[iColumn][iRow] === board[iColumn + 1][iRow - 1] &&
                board[iColumn][iRow] === board[iColumn + 2][iRow - 2] &&
                board[iColumn][iRow] === board[iColumn + 3][iRow - 3]
            ) {
                return { connect: true, direction: "diagonal right" };
            }
        }
    }
    return false;
};

const checkDiagonalLeft = (board) => {
    for (let iRow = 3; iRow < 6; iRow++) {
        for (let iColumn = 6; iColumn > 2; iColumn--) {
            if (
                board[iColumn][iRow] &&
                board[iColumn][iRow] === board[iColumn - 1][iRow - 1] &&
                board[iColumn][iRow] === board[iColumn - 2][iRow - 2] &&
                board[iColumn][iRow] === board[iColumn - 3][iRow - 3]
            ) {
                return { connect: true, direction: "diagonal left" };
            }
        }
    }
    return false;
};
