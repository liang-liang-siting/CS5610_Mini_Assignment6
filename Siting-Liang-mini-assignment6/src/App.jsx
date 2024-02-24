import React, { useState } from 'react';
import './App.css';
import Grid from './Grid';

const App = () => {
  // State to keep track of the count of cells that are "on"
  const [onCount, setOnCount] = useState(0);

  // Function to update the count of cells that are "on"
  const updateOnCount = (isOn) => {
    setOnCount(prevCount => isOn ? prevCount + 1 : prevCount - 1);
  };

  return (
    <div className="App">
      <div className='container'>
        <h1 className="count">Count: {onCount}</h1>
        <Grid updateOnCount={updateOnCount} />
      </div>
    </div>
  );
};

export default App;
