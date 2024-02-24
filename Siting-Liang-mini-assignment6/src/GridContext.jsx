import React, { createContext, useState, useContext } from 'react';

// Create a context to hold the state
const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [blackCount, setBlackCount] = useState(0);

  // Function to update black count
  const updateBlackCount = (increment) => {
    setBlackCount(prevCount => increment ? prevCount + 1 : prevCount - 1);
  };

  return (
    <GridContext.Provider value={{ blackCount, updateBlackCount }}>
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => useContext(GridContext);
