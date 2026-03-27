import { useGame } from './GameContext';

const WelcomeScreen = () => {
  const { startGame } = useGame();
  return (
    <div className="welcome">
      <h1>Whack-a-Mole!</h1>
      <p>Click the mole as fast as you can.</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
};
export default WelcomeScreen;