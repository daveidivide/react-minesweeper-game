import './App.css';
import { Game } from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>&#128163; Minesweeper Game &#128163;</h1>
        <h3>Press U, D, L & R</h3>
        <h5>Reach the top line to win. Hit three landmines and you lose!</h5>
        <Game />
      </header>
    </div>
  );
}

export default App;
