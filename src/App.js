import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <header className="App-header">
            <h2>we are learning  react router</h2>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'Contact'}>Contact</Link></li>
              <li><Link to={'About'}>About</Link></li>
            </ul>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </header>
        </header>
      </div>
    </Router>
  );
}

export default App;