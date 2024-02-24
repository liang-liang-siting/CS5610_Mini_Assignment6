import React, { useState } from 'react';

const Cell = ({ onCellClick }) => { 
    const [isBlack, setIsBlack] = useState(false);

  const handleClick = () => {
    setIsBlack(!isBlack);
    onCellClick(isBlack);
  };

  return (
    <div
      className={`cell ${isBlack ? 'on' : ''}`}
      onClick={handleClick}
    ></div>
  );
};

export default Cell;
