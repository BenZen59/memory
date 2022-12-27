import React, { useState } from 'react';

export default function Card({ value }) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
  }

  return <div onClick={handleClick}>{flipped ? value : '?'}</div>;
}
