import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children, isSelected, updateBoard, index}) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={`square ${isSelected ? 'is-selected' : ''}`} onClick={handleClick}>
        {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2], // horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonal
  [2, 4, 6],
]

const checkWinner = (board) => {
  // recorremos las combinaciones ganadoras y vemos si alguna gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null no hay ganador, false empate

  const updateBoard = (index) => {
    // no actualizamos el board si ya tiene algo o hay ganador
    if(board[index] || winner) return

    // actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // verificamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
      <h1>ta te ti</h1>
      <section className='game'>
        {board.map((cell, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
