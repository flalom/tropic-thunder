import React from 'react';
import Lukasz from './page/Lukasz.js'
import Progressbar from './components/Progressbar.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lukasz></Lukasz>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I learn React
        </a>
        <Progressbar steps={5} />
      </header>
    </div>
  );
}

export default App;
