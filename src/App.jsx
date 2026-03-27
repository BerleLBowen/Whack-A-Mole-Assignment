import { GameProvider, useGame } from './GameContext';
import WelcomeScreen from './WelcomeScreen';
import GameBoard from './GameBoard';

function AppContent() {
  const { isPlaying } = useGame();
  return (
    <div className="App">
      {isPlaying ? <GameBoard /> : <WelcomeScreen />}
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;