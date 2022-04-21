import Navbar from './components/Navbar/Navbar.js';
import GameContainer from './components/Game/Game.js';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
