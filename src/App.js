import React from 'react';
import logo from './logo.svg';
import dragon1 from './components/assets/dragon1.png';
import './App.css';
import Navigation from './components/UI/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={dragon1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
