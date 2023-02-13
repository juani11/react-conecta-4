const numberOfColumns = 7;
const numberOfRows = 6;

const thereIsAWinner = (board) => {
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
    const reverseBoard = board.slice().reverse();
    return (
        checkColumn(board) || //Solo hay 3 combinaciones posibles por columna
        checkRow(board) || //Solo hay 3 combinaciones posibles por fila
        checkDiagonalRight(board) ||
        checkDiagonalLeft(board)
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

const findRowIndexOfNextCircleInColumn = (column) => {
    let rowIndex;
    //Si la columna todavia no tiene nigun circulo, devuelvo el indice del ultimo elemento de la columna
    if (column.every((circle) => circle === null)) {
        rowIndex = numberOfRows - 1;
    } else {
        //Si la columna no esta totalmente vacia, (hay al menos un elemento), busco el indice del primero que sea !=null y devuelvo el indice del anterior a ese elemento.
        rowIndex = column.findIndex((circle) => circle != null) - 1;
    }
    return rowIndex;
};

export { numberOfColumns, findRowIndexOfNextCircleInColumn, thereIsAWinner };
