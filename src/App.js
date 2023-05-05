
import './App.css';

import ChessGame from './components/chess/ChessGame';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ChessGame />
    </div>
  );
}

export default App;
