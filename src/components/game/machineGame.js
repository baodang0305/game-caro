import React from 'react'
import Board from './board'
import '../../css/bootstrap.css'
import '../../css/game.css'

const MachineGame = ({history, winnerHistory, stepNumber, xIsNext, clickAction, previousClick, nextClick, jumpTo}) => {
        
    const moves = history.map((step, move) => {
        const desc = move ? `Quay lại bước #${move}` : 'Bắt đầu lại'
        if (stepNumber === move) {
            return (
                <li key={move.toString()}>
                    <button
                        type="button"
                        className="background-powderblue w-100"
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
                    className="w-100"
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
        status = `Người Thắng: ${player}`
    } else {
        player = xIsNext ? 'x' : 'o'
        status = `Người đánh tiếp theo: ${player}`
    }
    return (
        <div className="container form border border-info mt-4">
            <div className="row mt-2 ml-2 mb-2">
                <div className="col-md-8 justify-content-md-center">
                    <h2>Game Caro VietNam</h2>
                    <Board
                        squares={squares}
                        arrayWinner={arrayWinner}
                        onClick={(i) => clickAction(i)}
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
                            Trước đó
                        </button>
                        <button type="button" onClick={() => nextClick()}>
                            Kế tiếp
                        </button>
                    </span>
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
    )
}

export default MachineGame
