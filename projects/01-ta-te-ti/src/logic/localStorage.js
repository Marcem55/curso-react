export const saveGameInStorage = (board, turn) => {
    // guardamos el tablero y el turno en el local storage
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const clearGameFromStorage = () => {
    // limpiamos el tablero y el turno del local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
