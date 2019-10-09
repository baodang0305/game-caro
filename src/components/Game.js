import React from 'react'
import Board from './Board'
import '../bootstrap.css'
import '../Game.css'

const Game = ({history, winnerHistory, stepNumber, xIsNext, handleClick, previousClick, nextClick, jumpTo}) => {
        
    const moves = history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start'
        if (stepNumber === move) {
            return (
                <li key={move.toString()}>
                    <button
                        type="button"
                        className="background-powderblue width-200"
                        onClick={() => jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            )
        }
        return (
            <li key={move.toString()}>
                <button
                    type="button"
                    className="width-200"
                    onClick={() => jumpTo(move)}
                >
                    {desc}
                </button>
            </li>
        )
    })
    const current = history[stepNumber]
    const squares = current.squares.slice();
    const winnerCurrent = winnerHistory[stepNumber - 1]
    let arrayWinner
    let player
    let status
    if (winnerCurrent) {
        arrayWinner = winnerCurrent.arrayWinner.slice()
        player = stepNumber % 2 ? 'x' : 'o'
        status = `Winner: ${player}`
    } else {
        player = xIsNext ? 'x' : 'o'
        status = `Player next: ${player}`
    }
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-8">
                    <h2 className="ml-170">Game Caro VietNam</h2>
                    <Board
                        squares={squares}
                        arrayWinner={arrayWinner}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="col-md-4 mt-5">
                    <h3>{status}</h3>
                    <span>
                        <button
                            type="button"
                            className="mt-3 mb-3 ml-4"
                            onClick={() => previousClick()}
                        >
                            Previous
                        </button>
                        <button type="button" onClick={() => nextClick()}>
                            Next
                        </button>
                    </span>
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
    )
}

export default Game
