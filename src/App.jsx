import "./App.css";
import { useState } from "react";
import { thereIsAWinner } from "./logic/general";
const TURNS_COLORS = {
    1: "yellow",
    2: "green",
};

const TURNS = {
    1: TURNS_COLORS[1],
    2: TURNS_COLORS[2],
};
const arr1 = [TURNS[2], TURNS[2], TURNS[2], TURNS[2], TURNS[2], null];
const arr2 = Array(6).fill(TURNS[2]);

const arrTest = Array(6).fill(null);
const boardInitialState = [
    arr1,
    arrTest,
    arrTest,
    arrTest,
    arrTest,
    arrTest,
    arrTest,
];

const arrayBoard = [];
const numberOfColumns = 7;
const numberOfRows = 6;
for (let i = 0; i < numberOfColumns; i++) {
    arrayBoard[i] = Array(6).fill(null);
}

console.log({ boardInitialState });
console.log({ arrayBoard });
function App() {
    const [board, setBoard] = useState(arrayBoard);

    const [turn, setTurn] = useState(TURNS[2]);

    // Indica el indice "X", y el indice "Y" del proximo circulo posible dentro de una columna
    const [nextCircleIndex, setNextCircleIndex] = useState([]);

    const handleHoverCircle = (circleIndexColumn) => {
        //Buscar en el board dentro de la columna que se hace hover, cual es el primer item != null
        const column = board[circleIndexColumn];

        const rowIndexOfNextCircleInColumn = column.findIndex(
            (circle) => circle == null
        );

        const reverseRowIndex =
            column.length - rowIndexOfNextCircleInColumn - 1;

        setNextCircleIndex([circleIndexColumn, reverseRowIndex]);
    };

    const handleClickCircle = (circleIndexColumn, indexRow) => {
        // Buscar en el board dentro de la columna que se hace click, cual es el primer item != null
        const column = board[circleIndexColumn];

        const rowIndexOfNextCircleInColumn = column.findIndex(
            (circle) => circle == null
        );

        const newBoardColumn = [...board[circleIndexColumn]];
        newBoardColumn[rowIndexOfNextCircleInColumn] = turn;

        const newBoard = [...board];
        newBoard[circleIndexColumn] = [...newBoardColumn];
        setBoard(newBoard);

        const existWinner = thereIsAWinner(newBoard);

        console.log({ existWinner });
        const newTurn = turn == TURNS[1] ? TURNS[2] : TURNS[1];
        setTurn(newTurn);
    };

    return (
        <div className='App'>
            <main>
                {/* ESTRUCTURA DE GRID */}

                {/* TITLE */}
                <h2>CONECTA 4</h2>

                {/* BOARD */}
                <section className='board'>
                    {board.map((column, indexColumn) => {
                        return (
                            // <div column-x>
                            column
                                .slice()
                                .reverse()
                                .map((elem, indexRow) => {
                                    return (
                                        <div
                                            key={`${indexColumn}${indexRow}`}
                                            className={`board-circle ${
                                                elem
                                                    ? `player-${elem}`
                                                    : indexColumn ===
                                                          nextCircleIndex[0] &&
                                                      indexRow ===
                                                          nextCircleIndex[1] &&
                                                      `player-${turn}`
                                            }
                                        
                                        
                                        `}
                                            onMouseEnter={() =>
                                                handleHoverCircle(indexColumn)
                                            }
                                            onClick={() =>
                                                handleClickCircle(
                                                    indexColumn,
                                                    indexRow
                                                )
                                            }
                                        ></div>
                                    );
                                })
                            // </div>
                        );
                        // aca
                    })}
                </section>

                {/* JUGADOR/TURNO ACTUAL */}

                <h3>Jugador actual:</h3>
                <div className={`board-circle player-${turn}`}></div>
                {/* GANADOR */}
            </main>
        </div>
    );
}

export default App;
