import React, { useState } from 'react';
import GameBoard from './GameBoard';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('playing');
  const [cards, setCards] = useState([
    { id: 1, value: 'A' },
    { id: 2, value: 'A' },
    { id: 3, value: 'B' },
    { id: 4, value: 'B' },
    { id: 5, value: 'C' },
    { id: 6, value: 'C' },
    { id: 7, value: 'D' },
    { id: 8, value: 'D' },
    { id: 9, value: 'E' },
    { id: 10, value: 'E' },
    { id: 11, value: 'F' },
    { id: 12, value: 'F' },
    { id: 13, value: 'G' },
    { id: 14, value: 'G' },
    { id: 15, value: 'H' },
    { id: 16, value: 'H' },
    { id: 17, value: 'I' },
    { id: 18, value: 'I' },
  ]);

  function shuffleCards() {
    setCards((prevCards) => prevCards.sort(() => Math.random() - 0.5));
  }

  return (
    <div className='container'>
      <span className='memory'>Memory</span>

      <GameBoard cards={cards} />

      <button onClick={shuffleCards} className='shuffle'>
        Shuffle Cards
      </button>
    </div>
  );
}

export default App;
