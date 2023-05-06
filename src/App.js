
import './App.css';

import ChessGame from './components/chess/ChessGame';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ChessGame />
      <Footer/>
      <SideBar/>
    </div>
  );
}

export default App;
