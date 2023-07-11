import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { Turns } from './components/Turns'
import { clearGameFromStorage, saveGameInStorage } from './logic/localStorage'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  const [winner, setWinner] = useState(null) // null no hay ganador, false empate

  const updateBoard = (index) => {
    // no actualizamos el board si ya tiene algo o hay ganador
    if (board[index] || winner) return

    // actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar el tablero en el local storage
    saveGameInStorage(newBoard, newTurn)

    // verificamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // limpiar el local storage
    clearGameFromStorage()
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <Turns turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
