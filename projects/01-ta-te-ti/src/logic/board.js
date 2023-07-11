import { WINNER_COMBOS } from "../constants"

export const checkWinner = (board) => {
  // recorremos las combinaciones ganadoras y vemos si alguna gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const checkEndGame = (board) => {
  // si todas las celdas estan ocupadas y no hay ganador, es empate
  return board.every(cell => cell !== null)
}