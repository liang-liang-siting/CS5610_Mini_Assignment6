import React from 'react';
import Cell from './Cell';

const Grid = ({ updateOnCount }) => {
  const handleCellClick = (isOn) => {
    updateOnCount(!isOn); 
  };

  return (
    <div className="grid"> 
      <div className="row">
        <Cell onCellClick={handleCellClick} />
        <Cell onCellClick={handleCellClick} />
      </div>
      <div className="row">
        <Cell onCellClick={handleCellClick} />
        <Cell onCellClick={handleCellClick} />
      </div>
    </div>
  );
};

export default Grid;
