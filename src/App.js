import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://4.img-dpreview.com/files/p/TS600x600~sample_galleries/3002635523/4971879462.jpg" className="App-logo" alt="logo" />
        {/* <img src={require(logo)} className="App-logo" alt="logo"  /> */}
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
