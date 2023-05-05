
import './App.css';

import ChessGame from './components/chess/ChessGame';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ChessGame />
      <Footer/>
    </div>
  );
}

export default App;
