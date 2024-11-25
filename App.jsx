import { useState,UseEffect } from 'react'
import './App.css'
import Board from './Boars'

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [treasureLocation, setTreasureLocation] = useState([0, 0])
  const [board, setBoard] = useState(createBoard())

  function createBoard() {
    const newBoard = Array(5).fill().map(() => Array(5).fill({ revealed: false, hasTreasure: false }))
    return newBoard
  }

  const startNewGame = () => {
    setGameOver(false)
    setClickCount(0)
    const newTreasureLocation = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)]
    setTreasureLocation(newTreasureLocation)
    setBoard(createBoard())
  };

  useEffect(() => {
    startNewGame()
  }, [])

  return (
    <div className="app">
      <h1>¡Encuentra el Tesoro!</h1>
      <Board 
        board={board} 
        setBoard={setBoard} 
        treasureLocation={treasureLocation} 
        gameOver={gameOver} 
        setGameOver={setGameOver} 
        clickCount={clickCount} 
        setClickCount={setClickCount} 
      />
      {gameOver && <h2>¡Ganaste! El tesoro fue encontrado en {treasureLocation[0]}, {treasureLocation[1]}.</h2>}
      <button onClick={startNewGame}>Reiniciar Juego</button>
    </div>
  );
}

export default App;
