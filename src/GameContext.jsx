import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null);
  const numHoles = 6;

  const randomizeMole = () => {
    let nextPos = molePosition;
    while (nextPos === molePosition) {
      nextPos = Math.floor(Math.random() * numHoles);
    }
    setMolePosition(nextPos);
  };

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
    randomizeMole();
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    randomizeMole();
  };

  const restartGame = () => {
    setIsPlaying(false);
  };

  return (
    <GameContext.Provider value={{ isPlaying, score, molePosition, numHoles, startGame, whackMole, restartGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);