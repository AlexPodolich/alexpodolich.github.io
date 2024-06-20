import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div id="counter" className="animate-counter">{counter}</div>
      <button
        id="main-button"
        onClick={handleButtonClick}
      >
        Loot
      </button>
    </>
  );
}

export default Counter;
