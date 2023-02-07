import "./App.css";
import { useState } from "react";
const TURNS_COLORS = {
    1: "yellow",
    2: "green",
};

const TURNS = {
    1: TURNS_COLORS[1],
    2: TURNS_COLORS[2],
};
const arr1 = Array(7).fill(TURNS[1]);
const arr2 = Array(7).fill(TURNS[2]);
const boardInitialState = [arr1, arr2, arr1, arr2, arr1, arr2];

console.log({ boardInitialState });
function App() {
    const [board, setBoard] = useState(boardInitialState);

    const [turn, setTurn] = useState(TURNS[2]);

    const handleClickCircle = (circleIndexColumn, circleIndexRow) => {
        console.log({ circleIndexColumn, circleIndexRow });
        // const newBoard = [...board];
        // newBoard[circleIndex] = turn;
        // setBoard(newBoard);

        // const newTurn = turn == TURNS[1] ? TURNS[2] : TURNS[1];
        // setTurn(newTurn);
    };
    return (
        <div className='App'>
            <main>
                {/* ESTRUCTURA DE GRID */}

                {/* TITLE */}
                <h2>CONECTA 4</h2>

                {/* BOARD */}
                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7,1fr)",
                        rowGap: "10px",
                        columnGap: "10px",
                        padding: "20px  ",
                    }}
                >
                    {board.map((row, indexRow) => {
                        return row.map((elem, indexColumn) => {
                            return (
                                <div
                                    key={`${indexColumn}${indexRow}`}
                                    className={`board-circle ${
                                        elem && `player-${elem}`
                                    }`}
                                    onClick={() =>
                                        handleClickCircle(indexColumn, indexRow)
                                    }
                                ></div>
                            );
                        });
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
