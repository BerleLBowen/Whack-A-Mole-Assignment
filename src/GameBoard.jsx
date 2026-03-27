import { useGame } from './GameContext';

const GameBoard = () => {
  const { score, restartGame, molePosition, numHoles, whackMole } = useGame();

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
      <div className="hole-grid">
        {Array.from({ length: numHoles }).map((_, i) => (
          <div key={i} className="hole">
            {i === molePosition && <div className="mole" onClick={whackMole}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GameBoard;