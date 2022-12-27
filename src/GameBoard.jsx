import React, { useState } from 'react';
import Card from './Card';
export default function GameBoard({ cards }) {
  const [flippedCards, setFlippedCards] = useState([]);

  function handleCardFlip(card) {
    if (flippedCards.length < 2) {
      setFlippedCards([...flippedCards, card]);
    }
  }

  return (
    <div className='cell'>
      {cards.map((card) => (
        <div className='letter'>
          <Card
            key={card.id}
            value={card.value}
            onFlip={() => handleCardFlip(card)}
          />
        </div>
      ))}
    </div>
  );
}
